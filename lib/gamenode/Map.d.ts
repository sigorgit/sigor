import { GameNode } from "skydapp-browser";
import AvatarImage from "../datamodel/AvatarImage";
import Avatar from "./Avatar";
export default class Map extends GameNode {
    avatars: {
        [id: string]: Avatar;
    };
    constructor(channelInfo: {
        channelName: string;
        avatars: {
            userPlatform: string;
            userId: string;
            username: string;
            x: number;
            y: number;
            toX: number | undefined;
            toY: number | undefined;
            avatarImage: AvatarImage;
        }[];
    });
    createAvatar(avatarInfo: {
        userPlatform: string;
        userId: string;
        username: string;
        x: number;
        y: number;
        toX: number | undefined;
        toY: number | undefined;
        avatarImage: AvatarImage;
    }): void;
}
//# sourceMappingURL=Map.d.ts.map