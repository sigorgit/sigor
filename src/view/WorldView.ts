import { Fullscreen } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import World from "../gamenode/World";

export default class WorldView implements View {

    public screen: Fullscreen;
    public world: World;

    constructor() {
        this.screen = new Fullscreen();
        this.screen.root.append(
            this.world = new World(),
        );
        this.repositeUI();
        window.addEventListener("resize", this.repositeUI);
    }

    private repositeUI = () => this.world.ui.repositeUI();

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.screen.delete();
        window.removeEventListener("resize", this.repositeUI);
    }
}
