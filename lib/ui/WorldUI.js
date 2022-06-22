"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const WorldManager_1 = __importDefault(require("../WorldManager"));
class WorldUI extends skydapp_browser_1.FixedNode {
    constructor() {
        super(0, 0);
        console.log(WorldManager_1.default.discordUser);
    }
    repositeUI() {
        if (this.screen !== undefined) {
        }
    }
}
exports.default = WorldUI;
//# sourceMappingURL=WorldUI.js.map