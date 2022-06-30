import { el, GameNode } from "skydapp-browser";
import AvatarImage from "../datamodel/AvatarImage";

export default class Avatar extends GameNode {

    public get id() {
        return `${this.info.userPlatform}-${this.info.userId}`;
    }

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
        this.dom = el("", info.username);
    }
}
