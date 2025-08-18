import { useEffect, useRef, useState, type ChangeEventHandler, type FormEvent } from 'react';
import { HoverEffect } from '..';
import './Card.css';

type CardProps = {
  kana: string;
  target: string;
	onGoodGuess: () => void;
}

export function Card({kana, target, onGoodGuess}: CardProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [isGuessed, setIsGuessed] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if(!inputRef.current) return;
		setTimeout(() => inputRef.current!.focus(), 300);
	}, [])

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		if(inputValue.toLowerCase() === target) {
			setIsGuessed(true);
			onGoodGuess();
		}
	}

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setInputValue(event.currentTarget.value.trim());
	}

  return (
    <div className={`card ${isGuessed ?'card--completed':''}`}> 
      <HoverEffect/>
      <form 
        className='card__form'
        onSubmit={handleSubmit}
      >
        <span className='card__kana'>
          {kana}
        </span>
        <div className='card__footer'>
          <input 
						ref={inputRef}
            className='card__input'
            maxLength={3}
            onChange={handleInputChange}
          />
          <span className='card__label'>
            ROMAJI?
          </span>
        </div>
      </form>
    </div>
  )
}