import { BodyNode, DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";

export default class World implements View {
    
    private container: DomNode;

    constructor() {
        BodyNode.append(
            (this.container = el(".world-view",
            ))
        );
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
