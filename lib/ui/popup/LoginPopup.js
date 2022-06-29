"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Config_1 = __importDefault(require("../../Config"));
class LoginPopup extends skydapp_browser_1.FixedNode {
    constructor() {
        super(0, 0);
        this.width = 520;
        this.height = 300;
        this.dom = (0, skydapp_browser_1.el)(".login-popup", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("img", { src: "/images/logo/sigor.png", alt: "시고르 - sigor" }), (0, skydapp_browser_1.el)("p", "우리들의 농촌 메타버스")), (0, skydapp_browser_1.el)("article", (0, skydapp_browser_1.el)("a", "디스코드 로그인", {
            href: `https://discord.com/api/oauth2/authorize?client_id=${Config_1.default.applicationId}&redirect_uri=${encodeURIComponent(`${window.location.protocol}//${window.location.host}`)}&response_type=code&scope=identify`,
        })));
        this.init(this.dom);
    }
    init(dom) {
        if (screen.width < 500) {
            dom.style({ width: this.width / 1.5, height: this.height / 1.3 });
        }
        else {
            dom.style({ width: this.width, height: this.height });
        }
    }
}
exports.default = LoginPopup;
//# sourceMappingURL=LoginPopup.js.map