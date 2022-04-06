"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class UnitStatusPopup extends skydapp_browser_1.FixedNode {
    constructor() {
        super(0, 0);
        this.dom = (0, skydapp_browser_1.el)(".popup-background", this.content = (0, skydapp_browser_1.el)(".unit-status-popup", (0, skydapp_browser_1.el)("a.back-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/back-button.png" }), { click: () => this.delete() }), (0, skydapp_browser_1.el)(".profile-image", (0, skydapp_browser_1.el)("img", { src: "/images/character/character1.jpeg" })), (0, skydapp_browser_1.el)(".status", (0, skydapp_browser_1.el)("h2", "STATUS")), (0, skydapp_browser_1.el)(".attribute", (0, skydapp_browser_1.el)("h2", "ATTRIBUTE"), (0, skydapp_browser_1.el)("img", { src: "/images/ui/character-status.png" })), (0, skydapp_browser_1.el)(".skills", (0, skydapp_browser_1.el)("a.skill-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/skill1.png" })), (0, skydapp_browser_1.el)("a.skill-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/skill2.png" })), (0, skydapp_browser_1.el)("a.skill-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/skill3.png" })), (0, skydapp_browser_1.el)("a.skill-button", (0, skydapp_browser_1.el)("img", { src: "/images/ui/skill4.png" }))), (0, skydapp_browser_1.el)("a.confirm-button", "확인", {
            click: () => this.delete(),
        }), (0, skydapp_browser_1.el)("a.compound-button", "합성")));
    }
}
exports.default = UnitStatusPopup;
//# sourceMappingURL=UnitStatusPopup.js.map