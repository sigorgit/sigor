import { GameNode } from "skydapp-browser";
import Character2D from "../datamodel/Character2D";
import LoginPopup from "../popup/LoginPopup";
import Sigor from "../Sigor";
import WorldUI from "../ui/WorldUI";
import Channel from "./Channel";

export default class World extends GameNode {

    private loginPopup: LoginPopup | undefined;
    public ui: WorldUI | undefined;
    public map: Channel | undefined;

    constructor() {
        super(0, 0);
        this.init();
    }

    private async init() {
        await Sigor.enterChannel("yard");

        if (await Sigor.checkDiscordLogin()) {
            this.append(this.ui = new WorldUI());
            this.ui.repositeUI();
            this.ui.on("delete", () => this.ui = undefined);
        } else {
            this.append(this.loginPopup = new LoginPopup());
            this.loginPopup.on("delete", () => this.loginPopup = undefined);
        }
    }

    public createMap(channelInfo: {
        channelName: string,
        avatars: {
            userPlatform: string,
            userId: string,
            username: string,
            x: number,
            y: number,
            toX: number | undefined,
            toY: number | undefined,
            avatarImage: Character2D,
        }[],
    }) {
        this.append(this.map = new Channel(channelInfo));
        this.map.on("delete", () => this.map = undefined);
    }
}
