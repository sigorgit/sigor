import { GameNode } from "skydapp-browser";
import Character2D from "../datamodel/Character2D";
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
            avatarImage: Character2D;
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
        avatarImage: Character2D;
    }): void;
    removeAvatar(avatarId: string): void;
}
//# sourceMappingURL=Map.d.ts.map