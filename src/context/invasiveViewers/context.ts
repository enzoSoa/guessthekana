import { createContext } from "react";

export type InvasiveViewersTransformData = {
    x: number
    y: number
    angle: number
    scale: number
};

type InvasiveViewersContextType = {
    viewers: InvasiveViewersTransformData[],
    addViewer: () => void,
};

export const InvasiveViewersContext = createContext<InvasiveViewersContextType>({
    viewers: [],
    addViewer: () => void(0),
});
