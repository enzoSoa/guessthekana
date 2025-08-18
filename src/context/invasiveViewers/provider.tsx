import { useState, type ReactNode } from "react";
import { InvasiveViewersContext, type InvasiveViewersTransformData } from "./context";

type InvasiveViewersContextProviderProps = {
    children: ReactNode,
}

export function InvasiveViewersContextProvider({children}: InvasiveViewersContextProviderProps) {
    const [viewers, setViewers] = useState<InvasiveViewersTransformData[]>([]);

    const addViewer = () => {
        setViewers([...viewers, {
            x: Math.floor(Math.random() * 101),
            y: Math.floor(Math.random() * 101),
            angle: Math.floor(Math.random() * 360),
            scale: Math.random() + 1,
        }]);
    };

    return <InvasiveViewersContext value={{viewers, addViewer}}>
        {children}
    </InvasiveViewersContext>;
}