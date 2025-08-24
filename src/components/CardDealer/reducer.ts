import type { KanaSelection } from "../../hooks";
import type { ReducerHandler } from "../../types";

type CardsDealerReducerState = {
    count: number,
    kanasList: KanaSelection[],
    shownFace: 'front' | 'back',
};
type CardsDealerReducerEvents = {
    'add-kana': {newKana: KanaSelection};
    'remove-first-kana': undefined;
    'turn-card': void;
};

export const cardDealerReducer: ReducerHandler<CardsDealerReducerState, CardsDealerReducerEvents> = (state, event) => {
    switch (event.type) {
        case 'add-kana':
            return {
                ...state,
                count: state.count+1,
                kanasList: [...state.kanasList, event.data.newKana],
            };
        case 'remove-first-kana':
            return {
                ...state,
                count: state.count,
                kanasList: state.kanasList.slice(1),
            };
        case 'turn-card':
            return {
                ...state,
                shownFace: state.shownFace === 'front' ? 'back' : 'front',
            };
    }
}