import { Store } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Config from "../Config";
import World from "../gamenode/World";
import WorldManager from "../WorldManager";

export default class WorldView implements View {

    private codeStore = new Store("codeStore");

    public world: World;

    constructor() {
        WorldManager.screen.root.append(
            this.world = new World(),
        );

        this.repositeUI();
        window.addEventListener("resize", this.repositeUI);

        this.world.on("connect", () => this.checkDiscordLogin());
    }

    private repositeUI = () => this.world.ui?.repositeUI();

    private async checkDiscordLogin() {
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.world.delete();
        window.removeEventListener("resize", this.repositeUI);
    }
}
