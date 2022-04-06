"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class EnterPopup extends skydapp_browser_1.FixedNode {
    constructor() {
        super(0, 0);
        this.dom = (0, skydapp_browser_1.el)(".popup-background", this.content = (0, skydapp_browser_1.el)(".enter-popup"));
    }
}
exports.default = EnterPopup;
//# sourceMappingURL=EnterPopup.js.map