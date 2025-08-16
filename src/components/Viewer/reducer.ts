import type { ReducerHandler } from "../../types";

type CardsDealerReducerState = {
    angriness: number,
};
type CardsDealerReducerEvents = {
    'get-angrier': void;
};

export const viewerReducer: ReducerHandler<CardsDealerReducerState, CardsDealerReducerEvents> = (state, event) => {
    switch (event.type) {
        case 'get-angrier':
            return {
                angriness: Math.min(state.angriness + 0.1, 1),
            };
    }
}