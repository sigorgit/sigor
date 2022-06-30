"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const SigorManager_1 = __importDefault(require("../SigorManager"));
class SigorClient {
    constructor(host, connected) {
        this.codeStore = new skydapp_browser_1.Store("codeStore");
        this.client = new skydapp_browser_1.WebSocketClient(`wss://${host}`);
        this.client.on("connect", () => {
            console.log("connected to server.");
            connected();
        });
        this.client.on("disconnect", () => {
            console.log("disconnected from server.");
            this.client.reconnect();
        });
    }
    async send(method, ...params) {
        return await this.client.send(method, ...params);
    }
    async checkDiscordLogin() {
        let code = this.codeStore.get("code");
        if (code === undefined) {
            code = new URLSearchParams(window.location.search).get("code");
            if (code !== null) {
                try {
                    await this.send("discord-token", code, `${window.location.protocol}//${window.location.host}`);
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
                SigorManager_1.default.discordUser = await this.send("discord-login", code);
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
}
exports.default = SigorClient;
//# sourceMappingURL=SigorClient.js.map