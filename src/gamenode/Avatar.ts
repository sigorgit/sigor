import { el, GameNode } from "skydapp-browser";
import AvatarImage, { Direction2DAreas } from "../datamodel/AvatarImage";
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

        // 세트 이미지로 구성된 캐릭터
        if ((info.avatarImage as any).set_image !== undefined) {
            const image: {
                set_image: string,
                scale?: number,
                stand?: Direction2DAreas,
                walk?: Direction2DAreas,
                run?: Direction2DAreas,
                attack?: Direction2DAreas,
                attacked?: Direction2DAreas,
            } = info.avatarImage as any;
            console.log(image);
        }

        this.dom = el(".avatar-username", info.username);

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
