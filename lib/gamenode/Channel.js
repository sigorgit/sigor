"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Avatar_1 = __importDefault(require("./Avatar"));
const Map_1 = __importDefault(require("./Map"));
class Channel extends skydapp_browser_1.GameNode {
    constructor(channelInfo) {
        super(0, 0);
        this.avatars = {};
        this.append(new Map_1.default());
        for (const avatarInfo of channelInfo.avatars) {
            this.createAvatar(avatarInfo);
        }
    }
    createAvatar(avatarInfo) {
        const avatar = new Avatar_1.default(avatarInfo).appendTo(this);
        avatar.on("delete", () => {
            delete this.avatars[avatarInfo.avatarId];
        });
        this.avatars[avatarInfo.avatarId] = avatar;
    }
    removeAvatar(avatarId) {
        this.avatars[avatarId]?.delete();
    }
}
exports.default = Channel;
//# sourceMappingURL=Channel.js.map