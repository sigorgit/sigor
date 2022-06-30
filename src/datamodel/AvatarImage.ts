interface Area {
    x: number,
    y: number,
    width: number,
    height: number,
    frame_width?: number,
    frame_height?: number,
    center_x: number,
    center_y: number,
}

export interface Direction2DAreas {
    top?: Area,
    bottom?: Area,
    left?: Area,
    right?: Area,
}

interface Direction2DURLs {
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
}

type AvatarImage = {
    set_image: string,
    scale?: number,
    stand?: Direction2DAreas,
    walk?: Direction2DAreas,
    run?: Direction2DAreas,
    attack?: Direction2DAreas,
    attacked?: Direction2DAreas,
} | {
    scale?: number,
    stand?: Direction2DURLs,
    walk?: Direction2DURLs,
    run?: Direction2DURLs,
    attack?: Direction2DURLs,
    attacked?: Direction2DURLs,
};

export default AvatarImage;