import { Viewer } from '../Viewer';
import './Banner.css';

export function Banner() {
    const bannerText = "GUESS-THE-KANA-";
    const count = 8;
    return (<div className='banner'>
        <div className='banner__roll'>
            <div className='banner__text'>{bannerText.repeat(count).split('').map(
                (letter, index) => 
                    <span 
                        key={`${index}-${letter}`}
                        className='banner__letter' 
                        style={{'--number': `${index % bannerText.length}`}}
                    >
                        {letter}
                    </span> 
            )}</div>
        </div>
        <div className='banner__patch'>
            <Viewer/>
        </div>
    </div>);
}