import { DomNode, el, Popup } from "skydapp-browser";

export default class Confirm extends Popup {

    public content: DomNode;

    constructor(
        title: string,
        message: string,
        confirmTitle: string,
        confirm: () => void,
    ) {
        super(".popup-background");
        this.append(
            this.content = el(".dialogue.confirm",
                el(".close-container", { click: () => this.delete(), },
                    el("img", { src: "/images/icn/close.svg", alt: "close" }),
                ),
                el("h6", title),
                el("p", message),
                el(".button-container",
                    el("button.cancel", "취소", {
                        click: () => this.delete(),
                    }),
                    el("button.ok", confirmTitle, {
                        click: () => {
                            confirm();
                            this.delete();
                        },
                    }),
                ),
            ),
        );
    }
}
