import { Delay, DomNode, el, GameNode } from "skydapp-browser";

export default class MessageBalloon extends GameNode {

    private balloonColor = "#fff";
    private content: DomNode;
    private delay: Delay | undefined;

    constructor(y: number) {
        super(0, y);
        this.dom = el(".message-balloon", this.content = el(".content"));
        this.dom.style({ backgroundColor: this.balloonColor });

        const before = el("").appendTo(this.dom);
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

        const after = el("").appendTo(this.dom);
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

    public updateMessage(message: string) {
        this.content.empty().appendText(message);
        this.updateDomPosition();
        if (this.dom !== undefined) {
            this.centerY = this.dom.rect.height / 2;
        }

        this.delay?.delete();
        this.delay = new Delay(this, () => {
            this.delete();
        }, 5000);
    }
}
