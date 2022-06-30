import { GameNode } from "skydapp-browser";
import AvatarImage from "../datamodel/AvatarImage";
export default class Avatar extends GameNode {
    private info;
    get id(): string;
    constructor(info: {
        userPlatform: string;
        userId: string;
        username: string;
        x: number;
        y: number;
        toX: number | undefined;
        toY: number | undefined;
        avatarImage: AvatarImage;
    });
}
//# sourceMappingURL=Avatar.d.ts.map