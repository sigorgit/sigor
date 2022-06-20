import { FixedNode } from "skydapp-browser";
import LoginPopup from "./LoginPopup";

export default class WorldUI extends FixedNode {

    private loginPopup: LoginPopup;

    constructor() {
        super(0, 0);
        this.append(
            this.loginPopup = new LoginPopup(),
        );
    }

    public repositeUI() {
        if (this.screen !== undefined) {
            this.loginPopup.move(this.screen.centerX / 30 - 8, this.screen.centerY / 10);
        }
    }
}
