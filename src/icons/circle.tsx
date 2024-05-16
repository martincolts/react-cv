import { G, Path, Rect, Svg } from "@react-pdf/renderer"

export const Circle = () => {
    return <Svg height='7px' width='5px'  viewBox="0 0 24 24" fill="none" >
        <G stroke-width="0"></G>
        <G stroke-linecap="round" stroke-linejoin="round"></G><G>
            <Rect width="24" height="24" fill="white"></Rect>
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#a13108"></Path>
            </G></Svg>
}