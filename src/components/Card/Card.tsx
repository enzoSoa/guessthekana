import { useState } from 'react';
import { CardFront, CardBack } from '..';
import './Card.css';
import type { Alphabet, Romaji } from '../../hooks';

type CardProps = {
  alphabet: Alphabet;
  romaji: Romaji;
  shownFace: 'front' | 'back';
	onGoodGuess: () => void;
}

export function Card({alphabet, romaji, shownFace, onGoodGuess}: CardProps) {
  const [isGuessed, setIsGuessed] = useState(false)

  const handleGoodGuess = () => {
    setIsGuessed(true);
    onGoodGuess();
  }

  return (
    <div className={`card ${isGuessed ? 'card--guessed' : ''}`}> 
      <CardFront alphabet={alphabet} romaji={romaji} onGoodGuess={handleGoodGuess} isHidden={shownFace === 'back'}/>
      <CardBack romaji={romaji} isHidden={shownFace === 'front'}/>
    </div>
  )
}