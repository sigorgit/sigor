"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class Home {
    constructor() {
        skydapp_browser_1.BodyNode.append((this.container = (0, skydapp_browser_1.el)(".home-view", (0, skydapp_browser_1.el)("main", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("h1", "시고르"), (0, skydapp_browser_1.el)("h2", "시고르는 준비중이야!"), (0, skydapp_browser_1.el)("a", "기다리는 동안 시고르 디스코드에서 놀자~", { href: "https://discord.com/invite/YgdruRMFtJ", target: "_blank" })), (0, skydapp_browser_1.el)(".overlay")))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map