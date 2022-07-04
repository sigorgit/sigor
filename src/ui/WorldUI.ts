import { FixedNode } from "skydapp-browser";
import Menu from "../gamenode/Menu";
import Sigor from "../Sigor";
import ChatBar from "./ChatBar";
import Cordinate from "./Cordinate";

export default class WorldUI extends FixedNode {

    public cordinate: Cordinate;
    private chatBar: ChatBar;
    private menu: Menu;

    constructor() {
        super(0, 0);
        this.append(
            this.cordinate = new Cordinate(),
            this.chatBar = new ChatBar(),
            this.menu = new Menu(),
        );
        window.addEventListener("resize", this.repositeUI);
    }

    public repositeUI = () => {
        if (this.screen !== undefined) {
            this.cordinate.move(-this.screen.centerX, this.screen.centerY);
            Sigor.showCordinate();
            this.chatBar.move(0, this.screen.centerY);
            this.menu.move(-this.menu.width + this.screen.centerX + 20, this.menu.height / 2 - this.screen.centerY + 10);
        }
    }

    public delete() {
        window.removeEventListener("resize", this.repositeUI);
        super.delete();
    }
}
