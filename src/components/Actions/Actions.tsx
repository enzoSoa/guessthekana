import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ToggleMemoButton } from "../ToggleMemoButton";
import './Actions.css';

type ActionsProps = {
    isMemoShown: boolean,
    onMemoClick: () => void,
};

export function Actions({isMemoShown, onMemoClick}: ActionsProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [offsetTop, setOffsetTop] = useState(0);

    useEffect(() => {
        const calculateOffset = () => {
            if(!wrapperRef.current) return;

            const {y} = wrapperRef.current.getBoundingClientRect()
            const adjustedY = y;
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
        <div className="actions__wrapper" ref={wrapperRef}>
            <div
                className="actions"
                style={{'--offset-y': `${offsetTop}px`} as CSSProperties}
            >
                <ToggleMemoButton isShown={isMemoShown} onClick={onMemoClick}/>
            </div>
        </div>
    );
}