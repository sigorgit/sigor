import { GameNode } from "skydapp-browser";
import Character2D from "../datamodel/Character2D";
import Map from "./Map";
export default class World extends GameNode {
    private loginPopup;
    private ui;
    map: Map | undefined;
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
            avatarImage: Character2D;
        }[];
    }): void;
}
//# sourceMappingURL=World.d.ts.map