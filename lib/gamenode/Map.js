"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Sigor_1 = __importDefault(require("../Sigor"));
class Map extends skydapp_browser_1.GameNode {
    constructor() {
        super(0, 0);
        this.z = -999999;
        this.append(new skydapp_browser_1.ImageNode(0, 0, "/res/sample-map.png"));
        this.addTouchArea(new skydapp_browser_1.Rect(0, 0, 999999, 999999));
        this.on("click", (x, y) => {
            Sigor_1.default.moveTo(x, y);
        });
    }
}
exports.default = Map;
//# sourceMappingURL=Map.js.map