import { SkyRouter } from "skyrouter";
import CheckHolder from "./view/CheckHolder";

(async () => {
    SkyRouter.route("checkholder", CheckHolder);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();