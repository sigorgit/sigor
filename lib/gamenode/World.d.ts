import { GameNode } from "skydapp-browser";
import AvatarImage from "../datamodel/AvatarImage";
export default class World extends GameNode {
    private loginPopup;
    private ui;
    private map;
    constructor();
    private init;
    createMap(channelInfo: {
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
    }): void;
}
//# sourceMappingURL=World.d.ts.map