import Character2D from "./Character2D";
import UserPosition from "./UserPosition";

export default interface UserInfo {
    platform: string,
    userId: string,
    username: string,
    position: UserPosition,
    avatarImage: Character2D,
}