import { GameNode } from "skydapp-browser";
import Character2D from "../datamodel/Character2D";
export default class Avatar extends GameNode {
    private info;
    private speed;
    get id(): string;
    private statesNode;
    private messageBalloon;
    private height;
    private currentState;
    private currentDicrection;
    private makeSpriteNode;
    private makeDirectionStates;
    constructor(info: {
        userPlatform: string;
        userId: string;
        username: string;
        x: number;
        y: number;
        toX: number | undefined;
        toY: number | undefined;
        avatarImage: Character2D;
    });
    private set state(value);
    private set direction(value);
    moveTo(x: number, y: number): void;
    showMessage(message: string): void;
}
//# sourceMappingURL=Avatar.d.ts.map