import { GameNode } from "skydapp-browser";
import Character2D from "../datamodel/Character2D";
import Avatar from "./Avatar";
import Map from "./Map";

export default class Channel extends GameNode {

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
            avatarImage: Character2D,
        }[],
    }) {
        super(0, 0);
        this.append(
            new Map(),
        );

        for (const avatarInfo of channelInfo.avatars) {
            this.createAvatar(avatarInfo);
        }
    }

    public createAvatar(avatarInfo: {
        userPlatform: string,
        userId: string,
        username: string,
        x: number,
        y: number,
        toX: number | undefined,
        toY: number | undefined,
        avatarImage: Character2D,
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
