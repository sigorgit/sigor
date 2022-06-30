"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Sigor_1 = __importDefault(require("../Sigor"));
class ChatBar extends skydapp_browser_1.GameNode {
    constructor() {
        super(0, 0);
        this.keyupHandler = (event) => {
            if (event.key === "Enter") {
                this.input.domElement.focus();
            }
        };
        this.centerY = 45;
        this.dom = (0, skydapp_browser_1.el)(".chat-bar", this.input = (0, skydapp_browser_1.el)("input", {
            keyup: (event) => {
                if (event.key === "Enter") {
                    this.chat();
                }
            },
            placeholder: "메시지 보내기"
        }));
        window.addEventListener("keyup", this.keyupHandler);
    }
    chat() {
        const message = this.input.domElement.value;
        if (message.trim() !== "") {
            Sigor_1.default.chat(message);
        }
        this.input.domElement.value = "";
    }
    delete() {
        window.removeEventListener("keyup", this.keyupHandler);
        super.delete();
    }
}
exports.default = ChatBar;
//# sourceMappingURL=ChatBar.js.map