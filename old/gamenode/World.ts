import { GameNode, ImageNode, WebSocketClient } from "skydapp-browser";
import Config from "../Config";
import LoginPopup from "../ui/popup/LoginPopup";
import WorldUI from "../ui/WorldUI";

export default class World extends GameNode {

    private client = new WebSocketClient(`wss://${Config.backendHost}`);

    private loginPopup: LoginPopup | undefined;
    public ui: WorldUI | undefined;

    constructor() {
        super(0, 0);

        let testMap;
        this.append(
            testMap = new ImageNode(0, 0, "/images/ui/lpc_home_cup.gif"),
        );
        testMap.scale = 3;
    }

    public showWorldUI() {
        this.loginPopup?.delete();
        this.ui?.delete();
        this.append(this.ui = new WorldUI());
        this.ui.repositeUI();
    }

    public showLoginPopup() {
        this.loginPopup?.delete();
        this.ui?.delete();
        this.append(this.loginPopup = new LoginPopup());
    }
}
