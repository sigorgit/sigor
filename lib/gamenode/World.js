"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Config_1 = __importDefault(require("../Config"));
const LoginPopup_1 = __importDefault(require("../ui/popup/LoginPopup"));
const WorldUI_1 = __importDefault(require("../ui/WorldUI"));
class World extends skydapp_browser_1.GameNode {
    constructor() {
        super(0, 0);
        this.client = new skydapp_browser_1.WebSocketClient(`wss://${Config_1.default.backendHost}`);
        let testMap;
        this.append(testMap = new skydapp_browser_1.ImageNode(0, 0, "/images/ui/lpc_home_cup.gif"));
        testMap.scale = 3;
        this.client.on("connect", () => {
            this.fireEvent("connect");
        });
        this.client.on("disconnect", () => {
            console.log("disconnected.");
            this.client.reconnect();
        });
    }
    showWorldUI() {
        this.loginPopup?.delete();
        this.ui?.delete();
        this.append(this.ui = new WorldUI_1.default());
        this.ui.repositeUI();
    }
    showLoginPopup() {
        this.loginPopup?.delete();
        this.ui?.delete();
        this.append(this.loginPopup = new LoginPopup_1.default());
    }
}
exports.default = World;
//# sourceMappingURL=World.js.map