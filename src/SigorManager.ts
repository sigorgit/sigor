import { Fullscreen } from "skydapp-browser";
import DiscordUserInfo from "./datamodel/DiscordUserInfo";
import SigorClient from "./realtime/SigorClient";

class SigorManager {

    public screen: Fullscreen = new Fullscreen();
    public client!: SigorClient;
    public discordUser: DiscordUserInfo | undefined;
}

export default new SigorManager();
