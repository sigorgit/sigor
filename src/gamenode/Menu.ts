import { el, GameNode } from "skydapp-browser";

export default class Menu extends GameNode {
    public width = 60;
    public height = 25;

    constructor() {
        super(0, 0);
        this.dom = el(".menu",
            el("a", { href: "https://discord.com/invite/YgdruRMFtJ", target: "_blank" },
                el("img", { src: "./res/logo/discord.svg", alt: "discord" }),
            ),
            el("a", { href: "https://twitter.com/sigorcsc", target: "_blank" },
                el("img", { src: "./res/logo/twitter.svg", alt: "twitter" }),
            ),
        );
        this.dom.style({ width: this.width, height: this.height });
    }
}