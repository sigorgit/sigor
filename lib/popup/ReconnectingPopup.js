"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class ReconnectingPopup extends skydapp_browser_1.FixedNode {
    constructor() {
        super(0, 0);
        this.dom = (0, skydapp_browser_1.el)("", "Reconnecting...");
    }
}
exports.default = ReconnectingPopup;
//# sourceMappingURL=ReconnectingPopup.js.map