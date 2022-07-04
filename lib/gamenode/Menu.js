"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class Menu extends skydapp_browser_1.GameNode {
    constructor() {
        super(0, 0);
        this.width = 60;
        this.height = 25;
        this.dom = (0, skydapp_browser_1.el)(".menu", (0, skydapp_browser_1.el)("a", { href: "https://discord.com/invite/YgdruRMFtJ", target: "_blank" }, (0, skydapp_browser_1.el)("img", { src: "./res/logo/discord.svg", alt: "discord" })), (0, skydapp_browser_1.el)("a", { href: "https://twitter.com/sigorcsc", target: "_blank" }, (0, skydapp_browser_1.el)("img", { src: "./res/logo/twitter.svg", alt: "twitter" })));
        this.dom.style({ width: this.width, height: this.height });
    }
}
exports.default = Menu;
//# sourceMappingURL=Menu.js.map