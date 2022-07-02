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
        this.originalScale = 1;
        this.height = 0;
        this.currentState = "stand";
        this.currentDicrection = "bottom";
        this.yToZ = true;
        this.statesNode = new skydapp_browser_1.StatesNode(0, 0).appendTo(this);
        if (info.avatarImage.scale !== undefined) {
            this.originalScale = this.statesNode.scale = info.avatarImage.scale;
        }
        ["stand", "walk", "run", "attack", "attacked"].forEach((state) => {
            const sprites = info.avatarImage[state];
            if (sprites !== undefined) {
                this.statesNode.addState(state, this.makeDirectionStates(info.avatarImage.set_image, sprites));
            }
        });
        this.state = this.currentState;
        this.dom = (0, skydapp_browser_1.el)(".avatar-username", info.username);
        if (this.id === Sigor_1.default.currentUser) {
            Sigor_1.default.setTargetAvatar(this);
        }
    }
    get id() {
        return `${this.info.userPlatform}-${this.info.userId}`;
    }
    makeSpriteNode(setImage, sprite) {
        const image = sprite.image === undefined ? setImage : sprite.image;
        if (image !== undefined) {
            const node = new skydapp_browser_1.SpriteNode(0, 0, image, sprite.crop_x, sprite.crop_y, sprite.crop_width, sprite.crop_height, sprite.frame_width, sprite.frame_height, sprite.fps);
            node.on("load", () => {
                const width = node.frameWidth;
                this.height = node.frameHeight;
                if (sprite.center_x !== undefined) {
                    node.centerX = sprite.center_x - width / 2;
                }
                if (sprite.center_y !== undefined) {
                    node.centerY = sprite.center_y - this.height / 2;
                }
                if (this.messageBalloon !== undefined) {
                    this.messageBalloon.y = -this.height * this.statesNode.scale;
                }
                const shadow = new skydapp_browser_1.CircleNode(0, 0, width * this.statesNode.scale, width * this.statesNode.scale / 2, 0x000000).appendTo(this);
                shadow.alpha = 0.05;
                this.statesNode.z = 1;
            });
            return node;
        }
    }
    makeDirectionStates(setImage, sprites) {
        const states = {};
        ["top", "bottom", "left", "right"].forEach((direction) => {
            const sprite = sprites[direction];
            if (sprite !== undefined) {
                states[direction] = this.makeSpriteNode(sprites.set_image === undefined ? setImage : sprites.set_image, sprite);
            }
        });
        return new skydapp_browser_1.StatesNode(0, 0, states);
    }
    set state(state) {
        this.statesNode.state = state;
        this.currentState = state;
        this.direction = this.currentDicrection;
    }
    set direction(direction) {
        if (this.statesNode.currentStateNode !== undefined) {
            if (this.statesNode.currentStateNode.existsState(direction) !== true) {
                if (direction === "left") {
                    this.statesNode.currentStateNode.state = "right";
                    this.statesNode.scaleX = -this.originalScale;
                }
                else if (direction === "right") {
                    this.statesNode.currentStateNode.state = "left";
                    this.statesNode.scaleX = -this.originalScale;
                }
            }
            else {
                this.statesNode.scaleX = this.originalScale;
                this.statesNode.currentStateNode.state = direction;
            }
        }
        this.currentDicrection = direction;
    }
    moveTo(x, y) {
        this.state = "walk";
        super.moveTo(x, y, this.speed, () => this.state = "stand");
        const dx = x - this.x;
        const dy = y - this.y;
        const a = dy > dx;
        const b = dy > 1 - dx;
        if (a === true && b === true) {
            this.direction = "bottom";
        }
        else if (a === true && b !== true) {
            this.direction = "left";
        }
        else if (a !== true && b === true) {
            this.direction = "right";
        }
        else if (a !== true && b !== true) {
            this.direction = "top";
        }
    }
    showMessage(message) {
        if (this.messageBalloon !== undefined) {
            this.messageBalloon.updateMessage(message);
        }
        else {
            this.messageBalloon = new MessageBalloon_1.default(-this.height * this.statesNode.scale).appendTo(this);
            this.messageBalloon.updateMessage(message);
            this.messageBalloon.on("delete", () => this.messageBalloon = undefined);
        }
    }
    step(deltaTime, x, y, scaleX, scaleY, angle, sin, cos, alpha, hidden) {
        if (Sigor_1.default.screen.camera.target === this) {
            let prevX = this.x;
            let prevY = this.y;
            super.step(deltaTime, x, y, scaleX, scaleY, angle, sin, cos, alpha, hidden);
            if (this.x !== prevX || this.y !== prevY) {
                Sigor_1.default.showCordinate();
            }
        }
        else {
            super.step(deltaTime, x, y, scaleX, scaleY, angle, sin, cos, alpha, hidden);
        }
    }
}
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map