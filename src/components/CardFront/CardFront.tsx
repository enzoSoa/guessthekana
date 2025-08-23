import { useEffect, useRef, useState, type ChangeEventHandler, type FormEvent } from 'react';
import './CardFront.css';
import { CardBase } from '..';

type CardFrontProps = {
  kana: string;
  target: string;
  isHidden: boolean;
	onGoodGuess: () => void;
}

export function CardFront({kana, target, isHidden, onGoodGuess}: CardFrontProps) {
  const [inputValue, setInputValue] = useState<string>('');
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if(!inputRef.current || isHidden) return;
		setTimeout(() => inputRef.current!.focus(), 300);
	}, [isHidden])

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		if(inputValue.toLowerCase() === target) {
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
        <span className='card-front__kana'>
          {kana}
        </span>
        <div className='card-front__footer'>
          <input 
						ref={inputRef}
            className='card-front__input'
            maxLength={3}
            value={inputValue}
            onChange={handleInputChange}
          />
          <span className='card-front__label'>
            ROMAJI?
          </span>
        </div>
      </form>
    </CardBase>
  )
}