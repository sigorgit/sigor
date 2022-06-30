import { Fullscreen } from "skydapp-browser";
import UserInfo from "./datamodel/UserInfo";
import SigorClient from "./realtime/SigorClient";
declare class SigorManager {
    screen: Fullscreen;
    client: SigorClient;
    userInfo: UserInfo | undefined;
}
declare const _default: SigorManager;
export default _default;
//# sourceMappingURL=SigorManager.d.ts.map