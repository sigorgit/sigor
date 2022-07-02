"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Sigor_1 = __importDefault(require("../Sigor"));
const ChatBar_1 = __importDefault(require("./ChatBar"));
const Cordinate_1 = __importDefault(require("./Cordinate"));
class WorldUI extends skydapp_browser_1.FixedNode {
    constructor() {
        super(0, 0);
        this.append(this.cordinate = new Cordinate_1.default(), this.chatBar = new ChatBar_1.default());
    }
    repositeUI() {
        if (this.screen !== undefined) {
            this.cordinate.move(-this.screen.centerX, this.screen.centerY);
            Sigor_1.default.showCordinate();
            this.chatBar.move(0, this.screen.centerY);
        }
    }
}
exports.default = WorldUI;
//# sourceMappingURL=WorldUI.js.map