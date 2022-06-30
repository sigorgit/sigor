"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Config_1 = __importDefault(require("./Config"));
const ReconnectingPopup_1 = __importDefault(require("./popup/ReconnectingPopup"));
class Sigor {
    constructor() {
        this.screen = new skydapp_browser_1.Fullscreen();
        this.client = new skydapp_browser_1.WebSocketClient(`wss://${Config_1.default.backendHost}`);
    }
    start() {
        this.client.on("connect", () => {
            console.log("connected to server.");
            this.reconnectingPopup?.delete();
        });
        this.client.on("disconnect", () => {
            console.log("disconnected from server.");
            this.reconnectingPopup?.delete();
            this.reconnectingPopup = new ReconnectingPopup_1.default().appendTo(this.screen.root);
            setTimeout(() => {
                this.client.reconnect();
            }, 1000);
        });
    }
}
exports.default = new Sigor();
//# sourceMappingURL=Sigor.js.map