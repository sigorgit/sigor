import { FixedNode } from "skydapp-browser";
import ChatBar from "./ChatBar";

export default class WorldUI extends FixedNode {

    private chatBar: ChatBar;

    constructor() {
        super(0, 0);
        this.append(
            this.chatBar = new ChatBar(),
        );
    }

    public repositeUI() {
        if (this.screen !== undefined) {
            this.chatBar.move(0, this.screen.centerY);
        }
    }
}
