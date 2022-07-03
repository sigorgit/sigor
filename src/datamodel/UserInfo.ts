import Character2D from "./Character2D";
import UserPosition from "./UserPosition";

export default interface UserInfo {
    avatarId: string,
    username: string,
    position: UserPosition,
    avatarImage: Character2D,
}