"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const LoginPopup_1 = __importDefault(require("../ui/popup/LoginPopup"));
const WorldUI_1 = __importDefault(require("../ui/WorldUI"));
class World extends skydapp_browser_1.GameNode {
    constructor() {
        super(0, 0);
    }
    showLoginPopup() {
        this.loginPopup?.delete();
        this.ui?.delete();
        this.append(this.loginPopup = new LoginPopup_1.default());
    }
    showWorldUI() {
        this.loginPopup?.delete();
        this.ui?.delete();
        this.append(this.ui = new WorldUI_1.default());
        this.ui.repositeUI();
    }
}
exports.default = World;
//# sourceMappingURL=World.js.map