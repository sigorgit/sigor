"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const superagent_1 = __importDefault(require("superagent"));
const BrowserInfo_1 = __importDefault(require("./BrowserInfo"));
const Config_1 = __importDefault(require("./Config"));
const SigorClient_1 = __importDefault(require("./realtime/SigorClient"));
const WorldView_1 = __importDefault(require("./view/WorldView"));
const SigorManager_1 = __importDefault(require("./SigorManager"));
(async () => {
    skydapp_browser_1.msg.language = BrowserInfo_1.default.language;
    const promises = [];
    promises.push((async () => {
        skydapp_browser_1.msg.parseCSV((await superagent_1.default.get("/msg.csv")).text);
    })());
    promises.push(new Promise((resolve) => {
        SigorManager_1.default.client = new SigorClient_1.default(Config_1.default.backendHost, resolve);
    }));
    await Promise.all(promises);
    if (sessionStorage.__spa_path) {
        skydapp_common_1.SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
    skydapp_common_1.SkyRouter.route("**", WorldView_1.default);
})();
//# sourceMappingURL=main.js.map