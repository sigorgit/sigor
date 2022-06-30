"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const World_1 = __importDefault(require("../gamenode/World"));
const SigorManager_1 = __importDefault(require("../SigorManager"));
class WorldView {
    constructor() {
        SigorManager_1.default.screen.root.append(this.world = new World_1.default());
        this.checkDiscordLogin();
    }
    async checkDiscordLogin() {
        if (await SigorManager_1.default.client.checkDiscordLogin()) {
            this.world.showWorldUI();
        }
        else {
            this.world.showLoginPopup();
        }
    }
    changeParams(params, uri) { }
    close() {
        this.world.delete();
    }
}
exports.default = WorldView;
//# sourceMappingURL=WorldView.js.map