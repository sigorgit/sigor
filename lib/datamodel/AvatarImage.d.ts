export interface Sprite {
    image?: string;
    crop_x?: number;
    crop_y?: number;
    crop_width?: number;
    crop_height?: number;
    frame_width?: number;
    frame_height?: number;
    fps?: number;
    center_x?: number;
    center_y?: number;
}
export interface DirectionSprites {
    top?: Sprite;
    bottom?: Sprite;
    left?: Sprite;
    right?: Sprite;
}
export default interface AvatarImage {
    set_image?: string;
    scale?: number;
    stand?: DirectionSprites;
    walk?: DirectionSprites;
    run?: DirectionSprites;
    attack?: DirectionSprites;
    attacked?: DirectionSprites;
}
//# sourceMappingURL=AvatarImage.d.ts.map