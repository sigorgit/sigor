import { Fullscreen } from "skydapp-browser";
import DiscordUserInfo from "./datamodel/DiscordUserInfo";
import SigorClient from "./realtime/SigorClient";
declare class SigorManager {
    screen: Fullscreen;
    client: SigorClient;
    discordUser: DiscordUserInfo | undefined;
}
declare const _default: SigorManager;
export default _default;
//# sourceMappingURL=SigorManager.d.ts.map