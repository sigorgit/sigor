import { msg } from "skydapp-browser";
import { SkyRouter } from "skydapp-common";
import superagent from "superagent";
import BrowserInfo from "./BrowserInfo";
import CheckHolder from "./view/CheckHolder";
import Home from "./view/Home";
import WorldView from "./view/WorldView";

(async () => {
    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("", Home);
    SkyRouter.route("world", WorldView);
    SkyRouter.route("checkholder", CheckHolder);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();