import { GameNode } from "skydapp-browser";
import LoginPopup from "../ui/popup/LoginPopup";
import WorldUI from "../ui/WorldUI";

export default class World extends GameNode {

    private loginPopup: LoginPopup | undefined;
    private ui: WorldUI | undefined;

    constructor() {
        super(0, 0);
    }

    public showLoginPopup() {
        this.loginPopup?.delete();
        this.ui?.delete();
        this.append(this.loginPopup = new LoginPopup());
    }

    public showWorldUI() {
        this.loginPopup?.delete();
        this.ui?.delete();
        this.append(this.ui = new WorldUI());
        this.ui.repositeUI();
    }
}
