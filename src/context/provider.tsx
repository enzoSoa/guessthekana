import type { ReactNode } from "react";
import { InvasiveViewersContextProvider } from "./invasiveViewers";

const providers = [InvasiveViewersContextProvider]

type ContextsProvider = {
    children: ReactNode
};

export function ContextsProvider({children}: ContextsProvider) {
    return providers.reduce(
        (component, provider) => provider({children: component}),
        children
    );
}