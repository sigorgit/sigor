import { GameNode } from "skydapp-browser";
import Character2D from "../datamodel/Character2D";
export default class Avatar extends GameNode {
    private speed;
    private statesNode;
    private messageBalloon;
    private originalScale;
    private height;
    private currentState;
    private currentDicrection;
    private makeSpriteNode;
    private makeDirectionStates;
    constructor(info: {
        avatarId: string;
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
    step(deltaTime: number, x: number, y: number, scaleX: number, scaleY: number, angle: number, sin: number, cos: number, alpha: number, hidden: boolean): void;
}
//# sourceMappingURL=Avatar.d.ts.map