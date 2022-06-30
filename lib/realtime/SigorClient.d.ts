export default class SigorClient {
    private codeStore;
    private client;
    constructor(host: string, connected: () => void);
    send(method: string, ...params: any[]): Promise<any>;
    checkDiscordLogin(): Promise<boolean>;
}
//# sourceMappingURL=SigorClient.d.ts.map