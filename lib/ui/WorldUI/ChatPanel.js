"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
class ChatBar extends skydapp_browser_1.GameNode {
    constructor() {
        super(0, 0);
        this.width = 122;
        this.height = 126;
        this.dom = (0, skydapp_browser_1.el)("a.battle-button", {
            click: () => {
                skydapp_common_1.SkyRouter.go("/battle");
            },
        });
        this.dom.style({ width: this.width, height: this.height });
    }
}
exports.default = ChatBar;
//# sourceMappingURL=ChatPanel.js.map