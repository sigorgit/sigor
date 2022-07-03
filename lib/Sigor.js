"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Config_1 = __importDefault(require("./Config"));
const World_1 = __importDefault(require("./gamenode/World"));
const FirstConnectingPopup_1 = __importDefault(require("./popup/FirstConnectingPopup"));
const ReconnectingPopup_1 = __importDefault(require("./popup/ReconnectingPopup"));
class Sigor {
    constructor() {
        this.codeStore = new skydapp_browser_1.Store("codeStore");
        this.screen = new skydapp_browser_1.Fullscreen();
        this.firstConnectingPopup = new FirstConnectingPopup_1.default().appendTo(this.screen.root);
        this.currentChannel = "yard";
        this.createAvatarHandler = (info) => {
            this.world?.map?.createAvatar(info);
        };
        this.removeAvatarHandler = (avatarId) => {
            this.world?.map?.removeAvatar(avatarId);
        };
        this.chatHandler = (who, message) => {
            this.world?.map?.avatars[who]?.showMessage(message);
        };
        this.moveToHandler = (who, x, y) => {
            this.world?.map?.avatars[who]?.moveTo(x, y);
        };
    }
    start() {
        this.client = new skydapp_browser_1.WebSocketClient(`wss://${Config_1.default.backendHost}`);
        this.client.on("connect", () => {
            console.log("connected to server.");
            this.firstConnectingPopup?.delete();
            this.firstConnectingPopup = undefined;
            this.reconnectingPopup?.delete();
            this.world?.delete();
            this.world = new World_1.default().appendTo(this.screen.root);
            this.world.on("delete", () => this.world = undefined);
        });
        this.client.on("disconnect", () => {
            console.log("disconnected from server.");
            this.world?.delete();
            if (this.firstConnectingPopup === undefined) {
                this.reconnectingPopup?.delete();
                this.reconnectingPopup = new ReconnectingPopup_1.default().appendTo(this.screen.root);
                this.reconnectingPopup.on("delete", () => this.reconnectingPopup = undefined);
            }
            setTimeout(() => {
                this.client.reconnect();
            }, 1000);
        });
        this.client.on("enter-channel", (channelName) => this.enterChannel(channelName));
    }
    async checkDiscordLogin() {
        let code = this.codeStore.get("code");
        if (code === undefined) {
            code = new URLSearchParams(window.location.search).get("code");
            if (code !== null) {
                try {
                    await this.client.send("load-discord-token", code, `${window.location.protocol}//${window.location.host}`);
                    this.codeStore.set("code", code, true);
                }
                catch (error) {
                    console.error(error);
                    code = undefined;
                }
            }
            else {
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
            }
            catch (error) {
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
    async enterChannel(channelName) {
        await this.exitChannel();
        this.currentChannel = channelName;
        const channelInfo = await this.client.send("enter-channel", channelName);
        this.client.on(`${this.currentChannel}/createAvatar`, this.createAvatarHandler);
        this.client.on(`${this.currentChannel}/removeAvatar`, this.removeAvatarHandler);
        this.client.on(`${this.currentChannel}/chat`, this.chatHandler);
        this.client.on(`${this.currentChannel}/moveTo`, this.moveToHandler);
        this.world?.createMap(channelInfo);
    }
    async exitChannel() {
        this.client.off(`${this.currentChannel}/createAvatar`, this.createAvatarHandler);
        this.client.off(`${this.currentChannel}/removeAvatar`, this.removeAvatarHandler);
        this.client.off(`${this.currentChannel}/chat`, this.chatHandler);
        this.client.off(`${this.currentChannel}/moveTo`, this.moveToHandler);
        await this.client.send("exit-channel");
    }
    async chat(message) {
        this.client.send(`${this.currentChannel}/chat`, message);
        if (this.currentUserInfo !== undefined) {
            this.chatHandler(this.currentUserInfo.avatarId, message);
        }
    }
    async moveTo(x, y) {
        this.client.send(`${this.currentChannel}/moveTo`, x, y);
        if (this.currentUserInfo !== undefined) {
            this.moveToHandler(this.currentUserInfo.avatarId, x, y);
        }
    }
    setTargetAvatar(avatar) {
        this.screen.camera.target = avatar;
        this.showCordinate();
    }
    showCordinate() {
        if (this.screen.camera.target !== undefined) {
            this.world?.ui?.cordinate.set(this.screen.camera.target.x, this.screen.camera.target.y);
        }
    }
}
exports.default = new Sigor();
//# sourceMappingURL=Sigor.js.map