"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class World {
    constructor() {
        skydapp_browser_1.BodyNode.append((this.container = (0, skydapp_browser_1.el)(".world-view")));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = World;
//# sourceMappingURL=World.js.map