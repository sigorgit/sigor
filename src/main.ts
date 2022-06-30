import { msg } from "skydapp-browser";
import { SkyRouter } from "skydapp-common";
import superagent from "superagent";
import BrowserInfo from "./BrowserInfo";
import Config from "./Config";
import SigorClient from "./realtime/SigorClient";
import WorldView from "./view/WorldView";
import SigorManager from "./SigorManager";

(async () => {
    msg.language = BrowserInfo.language;

    const promises: Promise<void>[] = [];
    promises.push((async () => {
        msg.parseCSV((await superagent.get("/msg.csv")).text);
    })());

    promises.push(new Promise((resolve) => {
        SigorManager.client = new SigorClient(Config.backendHost, resolve);
    }));

    await Promise.all(promises);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }

    SkyRouter.route("**", WorldView);
})();
