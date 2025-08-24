import './CardBack.css';
import { CardBase } from '..';
import { useRandomKana, type Romaji } from '../../hooks';

type CardBackProps = {
  romaji: Romaji;
  isHidden: boolean;
}

export function CardBack({romaji, isHidden}: CardBackProps) {
  const { romajiToKana } = useRandomKana();

  return (
    <CardBase isHidden={isHidden} isBackFace>
        <div className='card-back__line'>
          <span className='card-back__text card-back__kana'>{romajiToKana[romaji].hiragana}</span>
          <span className='card-back__label'>HIRAGANA</span>
        </div>
        <div className='card-back__line'>
          <span className='card-back__text card-back__kana'>{romajiToKana[romaji].katakana}</span>
          <span className='card-back__label'>KATAKANA</span>
        </div>
        <div className='card-back__line'>
          <span className='card-back__text'>{romaji}</span>
          <span className='card-back__label'>ROMAJI</span>
        </div>
    </CardBase>
  )
}