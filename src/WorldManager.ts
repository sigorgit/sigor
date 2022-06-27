import { Fullscreen } from "skydapp-browser";
import DiscordUserInfo from "./datamodel/DiscordUserInfo";

class WorldManager {

    public screen: Fullscreen = new Fullscreen();
    public discordUser: DiscordUserInfo | undefined;
}

export default new WorldManager();
