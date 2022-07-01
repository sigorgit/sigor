import { CircleNode, el, GameNode, SpriteNode, StatesNode } from "skydapp-browser";
import Character2D, { DirectionSprites, Sprite } from "../datamodel/Character2D";
import Sigor from "../Sigor";
import MessageBalloon from "./MessageBalloon";

export default class Avatar extends GameNode {

    private speed = 0.5;

    public get id() {
        return `${this.info.userPlatform}-${this.info.userId}`;
    }

    private statesNode: StatesNode<StatesNode>;
    private messageBalloon: MessageBalloon | undefined;

    private originalScale = 1;
    private height = 0;

    private currentState = "stand";
    private currentDicrection = "bottom";

    private makeSpriteNode(setImage: string | undefined, sprite: Sprite) {
        const image = sprite.image === undefined ? setImage : sprite.image;
        if (image !== undefined) {

            const node = new SpriteNode(0, 0,
                image,
                sprite.crop_x,
                sprite.crop_y,
                sprite.crop_width,
                sprite.crop_height,
                sprite.frame_width,
                sprite.frame_height,
                sprite.fps,
            );

            node.on("load", () => {
                const width = node.frameWidth!;
                this.height = node.frameHeight!;
                if (sprite.center_x !== undefined) { node.centerX = sprite.center_x - width / 2 }
                if (sprite.center_y !== undefined) { node.centerY = sprite.center_y - this.height / 2; }
                if (this.messageBalloon !== undefined) {
                    this.messageBalloon.y = -this.height * this.statesNode.scale;
                }

                // shadow
                const shadow = new CircleNode(0, 0, width * this.statesNode.scale, width * this.statesNode.scale / 2, 0x000000).appendTo(this);
                shadow.alpha = 0.05;
                this.statesNode.z = 1;
            });

            return node;
        }
    }

    private makeDirectionStates(setImage: string | undefined, sprites: DirectionSprites) {
        const states: { [state: string]: SpriteNode | undefined } = {};
        ["top", "bottom", "left", "right"].forEach((direction) => {
            const sprite = (sprites as any)[direction];
            if (sprite !== undefined) {
                states[direction] = this.makeSpriteNode(sprites.set_image === undefined ? setImage : sprites.set_image, sprite);
            }
        });
        return new StatesNode<SpriteNode>(0, 0, states);
    }

    constructor(private info: {
        userPlatform: string,
        userId: string,
        username: string,
        x: number,
        y: number,
        toX: number | undefined,
        toY: number | undefined,
        avatarImage: Character2D,
    }) {
        super(info.x, info.y);
        this.statesNode = new StatesNode<StatesNode>(0, 0).appendTo(this);

        if (info.avatarImage.scale !== undefined) {
            this.originalScale = this.statesNode.scale = info.avatarImage.scale;
        }

        ["stand", "walk", "run", "attack", "attacked"].forEach((state) => {
            const sprites = (info.avatarImage as any)[state];
            if (sprites !== undefined) {
                this.statesNode.addState(state, this.makeDirectionStates(info.avatarImage.set_image, sprites));
            }
        });

        this.state = this.currentState;

        this.dom = el(".avatar-username", info.username);

        if (this.id === Sigor.currentUser) {
            Sigor.screen.camera.target = this;
        }
    }

    private set state(state: string) {
        this.statesNode.state = state;
        this.currentState = state;
        this.direction = this.currentDicrection;
    }

    private set direction(direction: string) {
        if (this.statesNode.currentStateNode !== undefined) {
            if (this.statesNode.currentStateNode.existsState(direction) !== true) {
                if (direction === "left") {
                    this.statesNode.currentStateNode.state = "right";
                    this.statesNode.scaleX = -this.originalScale;
                } else if (direction === "right") {
                    this.statesNode.currentStateNode.state = "left";
                    this.statesNode.scaleX = -this.originalScale;
                }
            } else {
                this.statesNode.scaleX = this.originalScale;
                this.statesNode.currentStateNode.state = direction;
            }
        }
        this.currentDicrection = direction;
    }

    public moveTo(x: number, y: number) {

        this.state = "walk";
        super.moveTo(x, y, this.speed, () => this.state = "stand");

        // 상대좌표
        const dx = x - this.x;
        const dy = y - this.y;

        const a = dy > dx;
        const b = dy > 1 - dx;

        if (a === true && b === true) {
            this.direction = "bottom";
        } else if (a === true && b !== true) {
            this.direction = "left";
        } else if (a !== true && b === true) {
            this.direction = "right";
        } else if (a !== true && b !== true) {
            this.direction = "top";
        }
    }

    public showMessage(message: string) {
        if (this.messageBalloon !== undefined) {
            this.messageBalloon.updateMessage(message);
        } else {
            console.log(this.height);
            this.messageBalloon = new MessageBalloon(-this.height * this.statesNode.scale).appendTo(this);
            this.messageBalloon.updateMessage(message);
            this.messageBalloon.on("delete", () => this.messageBalloon = undefined);
        }
    }
}
