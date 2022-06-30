import { el, FixedNode } from "skydapp-browser";

export default class FirstConnectingPopup extends FixedNode {

    constructor() {
        super(0, 0);
        this.dom = el("", "First Connecting...");
    }
}
