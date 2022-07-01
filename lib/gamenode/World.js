"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const LoginPopup_1 = __importDefault(require("../popup/LoginPopup"));
const Sigor_1 = __importDefault(require("../Sigor"));
const WorldUI_1 = __importDefault(require("../ui/WorldUI"));
const Channel_1 = __importDefault(require("./Channel"));
class World extends skydapp_browser_1.GameNode {
    constructor() {
        super(0, 0);
        this.init();
    }
    async init() {
        await Sigor_1.default.enterChannel("yard");
        if (await Sigor_1.default.checkDiscordLogin()) {
            this.append(this.ui = new WorldUI_1.default());
            this.ui.repositeUI();
            this.ui.on("delete", () => this.ui = undefined);
        }
        else {
            this.append(this.loginPopup = new LoginPopup_1.default());
            this.loginPopup.on("delete", () => this.loginPopup = undefined);
        }
    }
    createMap(channelInfo) {
        this.append(this.map = new Channel_1.default(channelInfo));
        this.map.on("delete", () => this.map = undefined);
    }
}
exports.default = World;
//# sourceMappingURL=World.js.map