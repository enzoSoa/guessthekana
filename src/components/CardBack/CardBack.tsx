import './CardBack.css';
import { CardBase } from '..';

type CardBackProps = {
  kana: string;
  target: string;
  isHidden: boolean;
}

export function CardBack({kana, target, isHidden}: CardBackProps) {
  return (
    <CardBase isHidden={isHidden} isBackFace>
        <div className='card-back__line'>
          <span className='card-back__text'>{target}</span>
          <span className='card-back__label'>ROMAJI</span>
        </div>
        <div className='card-back__line'>
          <span className='card-back__text card-back__kana'>{kana}</span>
          <span className='card-back__label'>HIRAGANA</span>
        </div>
    </CardBase>
  )
}