import { el, FixedNode } from "skydapp-browser";

export default class ReconnectingPopup extends FixedNode {

    constructor() {
        super(0, 0);
        this.dom = el("", "Reconnecting...");
    }
}
