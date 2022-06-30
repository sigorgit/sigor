"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const SigorManager_1 = __importDefault(require("../SigorManager"));
class WorldUI extends skydapp_browser_1.FixedNode {
    constructor() {
        super(0, 0);
        console.log(SigorManager_1.default.discordUser);
    }
    repositeUI() {
        if (this.screen !== undefined) {
        }
    }
}
exports.default = WorldUI;
//# sourceMappingURL=WorldUI.js.map