import { el, GameNode } from "skydapp-browser";

export default class Cordinate extends GameNode {

    constructor() {
        super(0, 0);
        this.centerY = 20;
        this.dom = el(".cordinate");
    }

    public set(x: number, y: number) {
        this.dom!.empty().appendText(`(${Math.round(x)}, ${Math.round(y)})`);
        this.centerX = -this.dom!.rect.width / 2 - 10;
    }
}
