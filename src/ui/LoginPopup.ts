import { DomNode, el, FixedNode, msg } from "skydapp-browser";

export default class LoginPopup extends FixedNode {
    public width = 520;
    public height = 300;

    constructor() {
        super(0, 0);
        this.dom = el(".login-popup",
            el("header",
                el("img", { src: "/images/logo/sigor.png", alt: "시고르 - sigor" }),
                el("p", "우리들의 농촌 메타버스"),
            ),
            el("article",
                el("a", "시고르에 입장하기"),
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
