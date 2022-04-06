"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const World_1 = __importDefault(require("../gamenode/World"));
class WorldView {
    constructor() {
        this.repositeUI = () => this.world.ui.repositeUI();
        this.screen = new skydapp_browser_1.Fullscreen();
        this.screen.root.append(this.world = new World_1.default());
        this.repositeUI();
        window.addEventListener("resize", this.repositeUI);
    }
    changeParams(params, uri) { }
    close() {
        this.screen.delete();
        window.removeEventListener("resize", this.repositeUI);
    }
}
exports.default = WorldView;
//# sourceMappingURL=WorldView.js.map