"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class MessageBalloon extends skydapp_browser_1.GameNode {
    constructor(y) {
        super(0, y);
        this.balloonColor = "#fff";
        this.dom = (0, skydapp_browser_1.el)(".message-balloon", this.content = (0, skydapp_browser_1.el)(".content"));
        this.dom.style({ backgroundColor: this.balloonColor });
        const before = (0, skydapp_browser_1.el)("").appendTo(this.dom);
        before.style({
            content: "",
            width: 0,
            height: 0,
            position: "absolute",
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            borderTop: "4px solid #000000",
            borderBottom: "4px solid transparent",
            right: "calc(50% - 2px)",
            bottom: -8.5,
        });
        const after = (0, skydapp_browser_1.el)("").appendTo(this.dom);
        after.style({
            content: "",
            width: 0,
            height: 0,
            position: "absolute",
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            borderTop: `4px solid ${this.balloonColor}`,
            borderBottom: "4px solid transparent",
            right: "calc(50% - 2px)",
            bottom: -7.5,
        });
    }
    updateMessage(message) {
        this.content.empty().appendText(message);
        this.updateDomPosition();
        if (this.dom !== undefined) {
            this.centerY = this.dom.rect.height / 2 + 10;
        }
        this.delay?.delete();
        this.delay = new skydapp_browser_1.Delay(this, () => {
            this.delete();
        }, 5000);
    }
}
exports.default = MessageBalloon;
//# sourceMappingURL=MessageBalloon.js.map