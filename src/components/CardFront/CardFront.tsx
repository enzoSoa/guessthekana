import { useEffect, useRef, useState, type ChangeEventHandler, type FormEvent } from 'react';
import './CardFront.css';
import { CardBase } from '..';
import { useRandomKana, type Alphabet, type Romaji } from '../../hooks';

type CardFrontProps = {
  alphabet: Alphabet;
  romaji: Romaji;
  isHidden: boolean;
	onGoodGuess: () => void;
}

export function CardFront({alphabet, romaji, isHidden, onGoodGuess}: CardFrontProps) {
  const { romajiToKana } = useRandomKana();
  const [inputValue, setInputValue] = useState<string>('');
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if(!inputRef.current || isHidden) return;
    inputRef.current!.focus({preventScroll: true});
	}, [isHidden])

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		if(inputValue.toLowerCase() === romaji) {
			onGoodGuess();
		}
	}

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setInputValue(event.currentTarget.value.replace(' ', ''));
	}

  return (
    <CardBase isHidden={isHidden}>
      <form 
        className='card-front__form'
        onSubmit={handleSubmit}
      >
        <span className='card-front__label card-front__label--left'>
          {alphabet.toUpperCase()}
        </span>
        <span className='card-front__kana'>
          {romajiToKana[romaji][alphabet]}
        </span>
        <input 
          ref={inputRef}
          className='card-front__input'
          maxLength={3}
          value={inputValue}
          onChange={handleInputChange}
          autoCorrect='off'
          enterKeyHint='send'
        />
        <span className='card-front__label card-front__label--down'>
          ROMAJI?
        </span>
      </form>
    </CardBase>
  )
}