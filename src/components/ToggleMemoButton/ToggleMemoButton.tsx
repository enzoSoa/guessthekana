import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Eye } from '../Eye';
import './ToggleMemoButton.css';

type ToggleMemoButtonProps = {
    isShown: boolean;
    onClick: () => void;
};

export function ToggleMemoButton({isShown, onClick}: ToggleMemoButtonProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [offsetTop, setOffsetTop] = useState(0);

    useEffect(() => {
        const calculateOffset = () => {
            if(!wrapperRef.current) return;

            const {y} = wrapperRef.current.getBoundingClientRect()
            const adjustedY = y + offsetTop
            setOffsetTop(adjustedY < 0 ? -adjustedY + 8 : 0);
        };

        window.addEventListener?.('resize', calculateOffset);
        window.addEventListener?.('scroll', calculateOffset);
        return () => {
            window.removeEventListener?.('resize', calculateOffset);
            window.removeEventListener?.('scroll', calculateOffset);
        };
    }, [])

    return (
        <div 
            ref={wrapperRef}
            className='toggle-memo-button__wrapper'
        >
            <button 
                style={{'--offset-y': `${offsetTop}px`} as CSSProperties}
                className={`toggle-memo-button ${isShown ? 'toggle-memo-button--shown' : ''}`}
                onClick={onClick}
            >
                <div className='toggle-memo-button__icon'>
                    <div className='toggle-memo-button__icon-adjustment'>
                        <Eye
                            accentColor='var(--primary-light)'
                            backgroundColor='var(--primary-medium)'
                            rotated={-90}
                        />
                    </div>
                </div>
                <div className='toggle-memo-button__sentence'>
                    <span className='toggle-memo-button__word'>
                        <span className='toggle-memo-button__switching-letters'>
                            <span>S</span>
                            <span>H</span>
                        </span>
                        <span className='toggle-memo-button__switching-letters'>
                            <span>H</span>
                            <span>I</span>
                        </span>
                        <span className='toggle-memo-button__switching-letters'>
                            <span>O</span>
                            <span>D</span>
                        </span>
                        <span className='toggle-memo-button__switching-letters'>
                            <span>W</span>
                            <span>E</span>
                        </span>
                    </span>
                    <span className='toggle-memo-button__word'>
                        MEMO
                    </span>
                </div>
            </button>
        </div>
    );
}