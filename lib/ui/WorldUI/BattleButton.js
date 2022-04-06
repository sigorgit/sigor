"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const BattlePopup_1 = __importDefault(require("../BattlePopup"));
class BattleButton extends skydapp_browser_1.GameNode {
    constructor() {
        super(0, 0);
        this.width = 100;
        this.height = 100;
        this.dom = (0, skydapp_browser_1.el)("a.battle-button", "침략", {
            click: () => {
                if (this.screen !== undefined) {
                    new BattlePopup_1.default().appendTo(this.screen.root);
                }
            },
        });
        this.dom.style({ width: this.width, height: this.height });
    }
}
exports.default = BattleButton;
//# sourceMappingURL=BattleButton.js.map