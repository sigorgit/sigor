import { View, ViewParams } from "skydapp-common";
import World from "../gamenode/World";
import SigorManager from "../SigorManager";

export default class WorldView implements View {

    private world: World;

    constructor() {
        SigorManager.screen.root.append(
            this.world = new World(),
        );
        this.checkDiscordLogin();
    }

    private async checkDiscordLogin() {
        if (await SigorManager.client.checkDiscordLogin()) {
            this.world.showWorldUI();
        } else {
            this.world.showLoginPopup();
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.world.delete();
    }
}
