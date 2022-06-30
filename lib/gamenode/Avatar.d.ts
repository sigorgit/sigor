import { GameNode } from "skydapp-browser";
import AvatarImage from "../datamodel/AvatarImage";
export default class Avatar extends GameNode {
    private info;
    private speed;
    get id(): string;
    private messageBalloon;
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
    moveTo(x: number, y: number): void;
    showMessage(message: string): void;
}
//# sourceMappingURL=Avatar.d.ts.map