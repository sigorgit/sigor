import UserInfo from "./datamodel/UserInfo";
declare class Sigor {
    private codeStore;
    private screen;
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
    private chatHandler;
    private moveToHandler;
    chat(message: string): Promise<void>;
    moveTo(x: number, y: number): Promise<void>;
}
declare const _default: Sigor;
export default _default;
//# sourceMappingURL=Sigor.d.ts.map