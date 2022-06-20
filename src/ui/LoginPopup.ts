import { DomNode, el, FixedNode, msg } from "skydapp-browser";

export default class LoginPopup extends FixedNode {
    public width = 520;
    public height = 560;

    constructor() {
        super(0, 0);
        this.dom = el(".login-popup",
            el("header",
                el("h1", msg("HOLDER_CHECK_TITLE")),
                el("h2", msg("HOLDER_CHECK_DESC")),
            ),
            el("article",
                el("img", { src: "/images/view/check-holder/housedeed.png" }),
                el("p", msg("HOLDER_DESC1")),
                el("a.discord-login-button", msg("HOLDER_CHECK_BUTTON"), {
                    href: "https://discord.com/api/oauth2/authorize?client_id=939799459720728606&redirect_uri=https%3A%2F%2Fsigor.com%2Fcheckholder&response_type=code&scope=identify",
                }),
            ),
        );
        this.init(this.dom);
    }

    public init(dom: DomNode) {
        if (screen.width < 500) {
            dom.style({ width: this.width / 1.5, height: this.height / 1.3 });
        } else {
            dom.style({ width: this.width, height: this.height });
        }
    }
}
