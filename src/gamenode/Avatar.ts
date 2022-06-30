import { el, GameNode } from "skydapp-browser";
import AvatarImage from "../datamodel/AvatarImage";
import Sigor from "../Sigor";
import MessageBalloon from "./MessageBalloon";

export default class Avatar extends GameNode {

    private speed = 0.5;

    public get id() {
        return `${this.info.userPlatform}-${this.info.userId}`;
    }

    private messageBalloon: MessageBalloon | undefined;

    constructor(private info: {
        userPlatform: string,
        userId: string,
        username: string,
        x: number,
        y: number,
        toX: number | undefined,
        toY: number | undefined,
        avatarImage: AvatarImage,
    }) {
        super(info.x, info.y);
        console.log(info);
        this.dom = el("", info.username);

        if (this.id === Sigor.currentUser) {
            Sigor.screen.camera.target = this;
        }
    }

    public moveTo(x: number, y: number) {
        super.moveTo(x, y, this.speed);
    }

    public showMessage(message: string) {
        if (this.messageBalloon !== undefined) {
            this.messageBalloon.updateMessage(message);
        } else {
            this.messageBalloon = new MessageBalloon(-100).appendTo(this);
            this.messageBalloon.updateMessage(message);
            this.messageBalloon.on("delete", () => this.messageBalloon = undefined);
        }
    }
}
