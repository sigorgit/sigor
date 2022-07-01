import { GameNode, ImageNode, Rect } from "skydapp-browser";
import Sigor from "../Sigor";

export default class Map extends GameNode {

    constructor() {
        super(0, 0);
        this.z = -999999;

        this.append(
            new ImageNode(0, 0, "/res/sample-map.png"),
        );
        this.addTouchArea(new Rect(0, 0, 999999, 999999));

        this.on("click", (x, y) => {
            Sigor.moveTo(x, y);
        });
    }
}
