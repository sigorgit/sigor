import { msg } from "skydapp-browser";
import { SkyRouter } from "skydapp-common";
import superagent from "superagent";
import Sigor from "./Sigor";

(async () => {
    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
    msg.parseCSV((await superagent.get("/msg.csv")).text);
    Sigor.start();
})();
