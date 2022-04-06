"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class UserInfoPanel extends skydapp_browser_1.GameNode {
    constructor() {
        super(0, 0);
        this.width = 400;
        this.height = 100;
        this.dom = (0, skydapp_browser_1.el)(".user-info-panel", (0, skydapp_browser_1.el)(".profile-image"), (0, skydapp_browser_1.el)("h1", "User Name"));
        this.dom.style({ width: this.width, height: this.height });
    }
}
exports.default = UserInfoPanel;
//# sourceMappingURL=UserInfoPanel.js.map