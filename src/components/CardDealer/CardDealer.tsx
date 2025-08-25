import { useEffect, useReducer } from 'react'
import { Actions, Card } from '..'
import { useRandomKana } from '../../hooks';
import './CardDealer.css'
import { cardDealerReducer } from './reducer';


export function CardDealer() {
    const {getRandomKana} = useRandomKana();
    const [{count, kanasList, shownFace}, dispatch] = useReducer(
        cardDealerReducer, 
        {
            count: 1,
            kanasList: [getRandomKana()],
            shownFace: 'front',
        },
    );

    useEffect(() => {
        const handleKeyPressed = (event: KeyboardEvent) => {
            if (event.key !== ' ') return;
            dispatch({type: 'turn-card', data: undefined});
        };

        window.addEventListener('keyup', handleKeyPressed);
        return () => {window.removeEventListener('keyup', handleKeyPressed)};
    }, [])

    const handleGoodGuess = () => {
        dispatch({ type: 'add-kana', data: {newKana: getRandomKana()}});
        setTimeout(() => dispatch({type: 'remove-first-kana', data: undefined}), 300);
    }

    return <div className='card-dealer'>
        <div className='card-dealer__wrapper'>
            {kanasList.map(({romaji, alphabet}, index) => {
                return <Card 
                    key={`${count - (kanasList.length - index) + 1}-${romaji}`} 
                    alphabet={alphabet} 
                    romaji={romaji} 
                    shownFace={shownFace}
                    onGoodGuess={handleGoodGuess}
                />

            }
            )}
        </div>
        <Actions onMemoClick={() => dispatch({type: 'turn-card', data: undefined})} isMemoShown={shownFace === 'back'}/>
    </div>
}