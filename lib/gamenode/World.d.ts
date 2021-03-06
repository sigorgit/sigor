import { GameNode } from "skydapp-browser";
import Character2D from "../datamodel/Character2D";
import WorldUI from "../ui/WorldUI";
import Channel from "./Channel";
export default class World extends GameNode {
    private loginPopup;
    ui: WorldUI | undefined;
    map: Channel | undefined;
    constructor();
    private init;
    createMap(channelInfo: {
        channelName: string;
        avatars: {
            avatarId: string;
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