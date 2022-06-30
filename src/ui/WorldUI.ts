import { FixedNode } from "skydapp-browser";
import SigorManager from "../SigorManager";

export default class WorldUI extends FixedNode {

    constructor() {
        super(0, 0);
        console.log(SigorManager.discordUser);
    }

    public repositeUI() {
        if (this.screen !== undefined) {
        }
    }
}
