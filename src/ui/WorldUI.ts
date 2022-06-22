import { FixedNode } from "skydapp-browser";
import WorldManager from "../WorldManager";

export default class WorldUI extends FixedNode {

    constructor() {
        super(0, 0);
        console.log(WorldManager.discordUser);
    }

    public repositeUI() {
        if (this.screen !== undefined) {
        }
    }
}
