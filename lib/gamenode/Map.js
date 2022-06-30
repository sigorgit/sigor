"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Sigor_1 = __importDefault(require("../Sigor"));
const Avatar_1 = __importDefault(require("./Avatar"));
class Map extends skydapp_browser_1.GameNode {
    constructor(channelInfo) {
        super(0, 0);
        this.avatars = {};
        this.append(new skydapp_browser_1.ImageNode(0, 0, "/res/sample-map.png"));
        this.addTouchArea(new skydapp_browser_1.Rect(0, 0, 999999, 999999));
        for (const avatarInfo of channelInfo.avatars) {
            this.createAvatar(avatarInfo);
        }
        this.on("click", (x, y) => {
            Sigor_1.default.moveTo(x, y);
        });
    }
    createAvatar(avatarInfo) {
        const avatar = new Avatar_1.default(avatarInfo).appendTo(this);
        this.avatars[avatar.id] = avatar;
    }
}
exports.default = Map;
//# sourceMappingURL=Map.js.map