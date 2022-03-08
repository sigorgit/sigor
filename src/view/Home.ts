import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";

export default class Home implements View {
    private container: DomNode;


    constructor() {
        BodyNode.append(
            (this.container = el(".home-view",
                el("main",
                    el("header",
                        el("h1", "시고르"),
                        el("h2", "시고르는 준비중이야!"),
                        el("a", "기다리는 동안 시고르 디스코드에서 놀자~", { href: "https://discord.com/invite/YgdruRMFtJ", target: "_blank" })
                    ),
                    el(".overlay"),
                ),
            ))
        );
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
