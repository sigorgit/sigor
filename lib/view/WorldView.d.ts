import { Fullscreen } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import World from "../gamenode/World";
export default class WorldView implements View {
    screen: Fullscreen;
    world: World;
    constructor();
    private repositeUI;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=WorldView.d.ts.map