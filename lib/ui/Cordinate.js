"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class Cordinate extends skydapp_browser_1.GameNode {
    constructor() {
        super(0, 0);
        this.centerY = 20;
        this.dom = (0, skydapp_browser_1.el)(".cordinate");
    }
    set(x, y) {
        this.dom.empty().appendText(`(${Math.round(x)}, ${Math.round(y)})`);
        this.centerX = -this.dom.rect.width / 2 - 10;
    }
}
exports.default = Cordinate;
//# sourceMappingURL=Cordinate.js.map