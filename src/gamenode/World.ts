import { GameNode } from "skydapp-browser";
import WorldUI from "../ui/WorldUI";

export default class World extends GameNode {

    public ui: WorldUI;

    constructor() {
        super(0, 0);
        this.append(
            this.ui = new WorldUI(),
        );
    }
}
