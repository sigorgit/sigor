import { Fullscreen } from "skydapp-browser";
import UserInfo from "./datamodel/UserInfo";
import Avatar from "./gamenode/Avatar";
declare class Sigor {
    private codeStore;
    screen: Fullscreen;
    private client;
    private firstConnectingPopup;
    private world;
    private reconnectingPopup;
    currentChannel: string;
    currentUserInfo: UserInfo | undefined;
    start(): void;
    checkDiscordLogin(): Promise<boolean>;
    enterChannel(channelName: string): Promise<void>;
    exitChannel(): Promise<void>;
    private createAvatarHandler;
    private removeAvatarHandler;
    private chatHandler;
    private moveToHandler;
    chat(message: string): Promise<void>;
    moveTo(x: number, y: number): Promise<void>;
    setTargetAvatar(avatar: Avatar): void;
    showCordinate(): void;
}
declare const _default: Sigor;
export default _default;
//# sourceMappingURL=Sigor.d.ts.map