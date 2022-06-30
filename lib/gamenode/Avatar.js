"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class Avatar extends skydapp_browser_1.GameNode {
    constructor(info) {
        super(info.x, info.y);
        this.info = info;
        this.dom = (0, skydapp_browser_1.el)("", info.username);
    }
    get id() {
        return `${this.info.userPlatform}-${this.info.userId}`;
    }
}
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map