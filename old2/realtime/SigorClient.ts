import { Store, WebSocketClient } from "skydapp-browser";
import SigorManager from "../SigorManager";

export default class SigorClient {

    private codeStore = new Store("codeStore");

    private client: WebSocketClient;

    constructor(host: string) {
        this.client = new WebSocketClient(`wss://${host}`);

        this.client.on("connect", () => {
            console.log("connected to server.");
            connected();
        });

        this.client.on("disconnect", () => {
            console.log("disconnected from server.");
            // 접속이 끊어지면 자동으로 재접속
            this.client.reconnect();
        });
    }

    public async send(method: string, ...params: any[]): Promise<any> {
        return await this.client.send(method, ...params);
    }

    public async checkDiscordLogin() {

        let code: string | undefined = this.codeStore.get("code");
        if (code === undefined) {
            code = new URLSearchParams(window.location.search).get("code")!;
            if (code !== null) {
                try {
                    await this.send("discord-token", code, `${window.location.protocol}//${window.location.host}`);
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
                SigorManager.userInfo = await this.send("discord-login", code);
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
}
