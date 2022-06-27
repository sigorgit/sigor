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

        let code: string | undefined = this.codeStore.get("code");
        if (code === undefined) {
            code = new URLSearchParams(window.location.search).get("code")!;
            if (code !== null) {
                try {
                    await fetch(`https://${Config.backendHost}/discord/token?${new URLSearchParams({
                        code,
                        redirect_uri: `${window.location.protocol}//${window.location.host}`,
                    })}`);
                    this.codeStore.set("code", code, true);
                } catch (error) {
                    console.error(error);
                    code = undefined;
                }
            } else {
                code = undefined;
            }
        }

        if (code !== undefined) {
            try {
                const result = await fetch(`https://${Config.backendHost}/discord/me?${new URLSearchParams({
                    code,
                })}`);
                WorldManager.discordUser = await result.json();
                this.world.showWorldUI();
            } catch (error) {
                console.error(error);
                this.codeStore.delete("code");
                this.world.showLoginPopup();
            }
        }

        else {
            this.codeStore.delete("code");
            this.world.showLoginPopup();
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.world.delete();
        window.removeEventListener("resize", this.repositeUI);
    }
}
