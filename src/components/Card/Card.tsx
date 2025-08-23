import { useState } from 'react';
import { CardFront, CardBack } from '..';
import './Card.css';

type CardProps = {
  kana: string;
  target: string;
  shownFace: 'front' | 'back';
	onGoodGuess: () => void;
}

export function Card({kana, target, shownFace, onGoodGuess}: CardProps) {
  const [isGuessed, setIsGuessed] = useState(false)

  const handleGoodGuess = () => {
    setIsGuessed(true);
    onGoodGuess();
  }

  return (
    <div className={`card ${isGuessed ? 'card--guessed' : ''}`}> 
      <CardFront kana={kana} target={target} onGoodGuess={handleGoodGuess} isHidden={shownFace === 'back'}/>
      <CardBack kana={kana} target={target} isHidden={shownFace === 'front'}/>
    </div>
  )
}