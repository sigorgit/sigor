import { Fullscreen, Store, WebSocketClient } from "skydapp-browser";
import Config from "./Config";
import Character2D from "./datamodel/Character2D";
import UserInfo from "./datamodel/UserInfo";
import Avatar from "./gamenode/Avatar";
import World from "./gamenode/World";
import FirstConnectingPopup from "./popup/FirstConnectingPopup";
import ReconnectingPopup from "./popup/ReconnectingPopup";

class Sigor {
    private codeStore = new Store("codeStore");

    public screen: Fullscreen = new Fullscreen();
    private client!: WebSocketClient;

    private firstConnectingPopup: FirstConnectingPopup | undefined = new FirstConnectingPopup().appendTo(this.screen.root);
    private world: World | undefined;
    private reconnectingPopup: ReconnectingPopup | undefined;

    public currentChannel = "yard";
    public currentUserInfo: UserInfo | undefined;

    public start() {

        this.client = new WebSocketClient(`wss://${Config.backendHost}`);

        this.client.on("connect", () => {
            console.log("connected to server.");
            this.firstConnectingPopup?.delete();
            this.firstConnectingPopup = undefined;
            this.reconnectingPopup?.delete();
            this.world?.delete();
            this.world = new World().appendTo(this.screen.root);
            this.world.on("delete", () => this.world = undefined);
        });

        this.client.on("disconnect", () => {
            console.log("disconnected from server.");
            this.world?.delete();
            if (this.firstConnectingPopup === undefined) {
                this.reconnectingPopup?.delete();
                this.reconnectingPopup = new ReconnectingPopup().appendTo(this.screen.root);
                this.reconnectingPopup.on("delete", () => this.reconnectingPopup = undefined);
            }
            setTimeout(() => {
                // 접속이 끊어지면 자동으로 재접속
                this.client.reconnect();
            }, 1000);
        });

        this.client.on("enter-channel", (channelName) => this.enterChannel(channelName));
    }

    public async checkDiscordLogin() {

        let code: string | undefined = this.codeStore.get("code");
        if (code === undefined) {
            code = new URLSearchParams(window.location.search).get("code")!;
            if (code !== null) {
                try {
                    await this.client.send("load-discord-token", code, `${window.location.protocol}//${window.location.host}`);
                    this.codeStore.set("code", code, true);
                } catch (error) {
                    console.error(error);
                    code = undefined;
                }
            } else {
                code = undefined;
            }
        }

        if (code !== undefined) {
            try {
                this.currentUserInfo = await this.client.send("discord-login", code);
                if (this.currentUserInfo === undefined) {
                    throw new Error("Current User Not Exists.");
                }
                const avatar = this.world?.map?.avatars[this.currentUserInfo.avatarId];
                if (avatar !== undefined) {
                    this.setTargetAvatar(avatar);
                }
                return true;
            } catch (error) {
                console.error(error);
                this.codeStore.delete("code");
                return false;
            }
        }

        else {
            this.codeStore.delete("code");
            return false;
        }
    }

    public async enterChannel(channelName: string) {
        await this.exitChannel();
        this.currentChannel = channelName;
        const channelInfo = await this.client.send("enter-channel", channelName);
        this.client.on(`${this.currentChannel}/createAvatar`, this.createAvatarHandler);
        this.client.on(`${this.currentChannel}/removeAvatar`, this.removeAvatarHandler);
        this.client.on(`${this.currentChannel}/chat`, this.chatHandler);
        this.client.on(`${this.currentChannel}/moveTo`, this.moveToHandler);
        this.world?.createMap(channelInfo);
    }

    public async exitChannel() {
        this.client.off(`${this.currentChannel}/createAvatar`, this.createAvatarHandler);
        this.client.off(`${this.currentChannel}/removeAvatar`, this.removeAvatarHandler);
        this.client.off(`${this.currentChannel}/chat`, this.chatHandler);
        this.client.off(`${this.currentChannel}/moveTo`, this.moveToHandler);
        await this.client.send("exit-channel");
    }

    private createAvatarHandler = (info: {
        avatarId: string,
        username: string,
        x: number,
        y: number,
        toX: number | undefined,
        toY: number | undefined,
        avatarImage: Character2D,
    }) => {
        this.world?.map?.createAvatar(info);
    };

    private removeAvatarHandler = (avatarId: string) => {
        this.world?.map?.removeAvatar(avatarId);
    };

    private chatHandler = (who: string, message: string) => {
        this.world?.map?.avatars[who]?.showMessage(message);
    };

    private moveToHandler = (who: string, x: number, y: number) => {
        this.world?.map?.avatars[who]?.moveTo(x, y);
    };

    public async chat(message: string) {
        this.client.send(`${this.currentChannel}/chat`, message);
        if (this.currentUserInfo !== undefined) {
            this.chatHandler(this.currentUserInfo.avatarId, message);
        }
    }

    public async moveTo(x: number, y: number) {
        this.client.send(`${this.currentChannel}/moveTo`, x, y);
        if (this.currentUserInfo !== undefined) {
            this.moveToHandler(this.currentUserInfo.avatarId, x, y);
        }
    }

    public setTargetAvatar(avatar: Avatar) {
        this.screen.camera.target = avatar;
        this.showCordinate();
    }

    public showCordinate() {
        if (this.screen.camera.target !== undefined) {
            this.world?.ui?.cordinate.set(this.screen.camera.target.x, this.screen.camera.target.y);
        }
    }
}

export default new Sigor();
