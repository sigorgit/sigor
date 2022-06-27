"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Config_1 = __importDefault(require("../Config"));
const World_1 = __importDefault(require("../gamenode/World"));
const WorldManager_1 = __importDefault(require("../WorldManager"));
class WorldView {
    constructor() {
        this.codeStore = new skydapp_browser_1.Store("codeStore");
        this.repositeUI = () => this.world.ui?.repositeUI();
        WorldManager_1.default.screen.root.append(this.world = new World_1.default());
        this.repositeUI();
        window.addEventListener("resize", this.repositeUI);
        this.world.on("connect", () => this.checkDiscordLogin());
    }
    async checkDiscordLogin() {
        let code = this.codeStore.get("code");
        if (code === undefined) {
            code = new URLSearchParams(window.location.search).get("code");
            if (code !== null) {
                try {
                    await fetch(`https://${Config_1.default.backendHost}/discord/token?${new URLSearchParams({
                        code,
                        redirect_uri: `${window.location.protocol}//${window.location.host}`,
                    })}`);
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
                const result = await fetch(`https://${Config_1.default.backendHost}/discord/me?${new URLSearchParams({
                    code,
                })}`);
                WorldManager_1.default.discordUser = await result.json();
                this.world.showWorldUI();
            }
            catch (error) {
                console.error(error);
                this.codeStore.delete("code");
                this.world.showLoginPopup();
            }
        }
        else {
            this.codeStore.delete("code");
            this.world.showLoginPopup();
        }
    }
    changeParams(params, uri) { }
    close() {
        this.world.delete();
        window.removeEventListener("resize", this.repositeUI);
    }
}
exports.default = WorldView;
//# sourceMappingURL=WorldView.js.map