import { DomNode, el, FixedNode } from "skydapp-browser";

export default class EnterPopup extends FixedNode {

    public content: DomNode;

    constructor() {
        super(0, 0);
        this.dom = el(".popup-background",
            this.content = el(".enter-popup",
            ),
        );
    }
}
