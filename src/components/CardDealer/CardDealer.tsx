import { useEffect, useReducer } from 'react'
import { Card, ToggleMemoButton } from '..'
import { useRandomKana } from '../../hooks';
import './CardDealer.css'
import { cardDealerReducer } from './reducer';


export function CardDealer() {
    const {romajiToKana, getRandomKana} = useRandomKana();
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
                console.log(romajiToKana[romaji][alphabet], romaji, alphabet)
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
        <ToggleMemoButton onClick={() => dispatch({type: 'turn-card', data: undefined})} isShown={shownFace === 'back'}/>
    </div>
}