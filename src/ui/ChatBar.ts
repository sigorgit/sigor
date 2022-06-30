import { DomNode, el, GameNode } from "skydapp-browser";
import Sigor from "../Sigor";

export default class ChatBar extends GameNode {

    private input: DomNode<HTMLInputElement>;

    constructor() {
        super(0, 0);
        this.centerY = 45;
        this.dom = el(".chat-bar",
            this.input =el("input", {
                keyup: (event: KeyboardEvent) => {
                    if (event.key === "Enter") {
                        this.chat();
                    }
                },
            }),
        );

        window.addEventListener("keyup", this.keyupHandler);
    }

    private keyupHandler = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            this.input.domElement.focus();
        }
    };

    private chat() {
        const message = this.input.domElement.value;
        if (message.trim() !== "") {
            Sigor.chat(message);
        }
        this.input.domElement.value = "";
    }

    public delete() {
        window.removeEventListener("keyup", this.keyupHandler);
        super.delete();
    }
}
