"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Sigor_1 = __importDefault(require("../Sigor"));
const MessageBalloon_1 = __importDefault(require("./MessageBalloon"));
class Avatar extends skydapp_browser_1.GameNode {
    constructor(info) {
        super(info.x, info.y);
        this.info = info;
        this.speed = 0.5;
        console.log(info);
        this.dom = (0, skydapp_browser_1.el)(".avatar-username", info.username);
        if (this.id === Sigor_1.default.currentUser) {
            Sigor_1.default.screen.camera.target = this;
        }
    }
    get id() {
        return `${this.info.userPlatform}-${this.info.userId}`;
    }
    moveTo(x, y) {
        super.moveTo(x, y, this.speed);
    }
    showMessage(message) {
        if (this.messageBalloon !== undefined) {
            this.messageBalloon.updateMessage(message);
        }
        else {
            this.messageBalloon = new MessageBalloon_1.default(-100).appendTo(this);
            this.messageBalloon.updateMessage(message);
            this.messageBalloon.on("delete", () => this.messageBalloon = undefined);
        }
    }
}
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map