"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const WorldUI_1 = __importDefault(require("../ui/WorldUI"));
class World extends skydapp_browser_1.GameNode {
    constructor() {
        super(0, 0);
        this.append(this.ui = new WorldUI_1.default());
    }
}
exports.default = World;
//# sourceMappingURL=World.js.map