import { GameNode, ImageNode, Rect } from "skydapp-browser";
import AvatarImage from "../datamodel/AvatarImage";
import Sigor from "../Sigor";
import Avatar from "./Avatar";

export default class Map extends GameNode {

    public avatars: { [id: string]: Avatar } = {};

    constructor(channelInfo: {
        channelName: string,
        avatars: {
            userPlatform: string,
            userId: string,
            username: string,
            x: number,
            y: number,
            toX: number | undefined,
            toY: number | undefined,
            avatarImage: AvatarImage,
        }[],
    }) {
        super(0, 0);
        this.append(
            new ImageNode(0, 0, "/res/sample-map.png"),
        );
        this.addTouchArea(new Rect(0, 0, 999999, 999999));

        for (const avatarInfo of channelInfo.avatars) {
            this.createAvatar(avatarInfo);
        }

        this.on("click", (x, y) => {
            Sigor.moveTo(x, y);
        });
    }

    public createAvatar(avatarInfo: {
        userPlatform: string,
        userId: string,
        username: string,
        x: number,
        y: number,
        toX: number | undefined,
        toY: number | undefined,
        avatarImage: AvatarImage,
    }) {
        const avatar = new Avatar(avatarInfo).appendTo(this);
        avatar.on("delete", () => {
            delete this.avatars[avatar.id];
        });
        this.avatars[avatar.id] = avatar;
    }

    public removeAvatar(avatarId: string) {
        this.avatars[avatarId]?.delete();
    }
}
