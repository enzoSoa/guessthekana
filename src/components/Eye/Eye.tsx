import { useEffect, useRef } from 'react';
import './Eye.css';
import { useDebouncedState } from '../../hooks';

type EyeProps = {
    onPoke: () => void;
}

export function Eye({onPoke}: EyeProps) {
    const eyeRef = useRef<HTMLDivElement>(null)
    const [{x,y}, setCoordinates] = useDebouncedState({x: 0, y: 0}, 2000);
    const [poked, setPoked] = useDebouncedState(false, 1000);

    useEffect(() => {
        const watchCursor = (event: MouseEvent) => {
            const {top,left,width,height} = eyeRef.current!.getBoundingClientRect();
            const {eyeX, eyeY} = {
                eyeX: Math.floor(left + width/2),
                eyeY: Math.floor(top + height/2),
            }
            const {clientX: mouseX, clientY: mouseY} = event

            const rawDeg = Math.atan2(eyeY - mouseY, eyeX - mouseX) * 180 / Math.PI;
            const loopDeg  = rawDeg < 0 ? 360 + rawDeg : rawDeg;
            const rectifiedDeg  = loopDeg + 45 + 180;
            const radian = rectifiedDeg * (Math.PI/180);

            const halfAngle = loopDeg % 180;
            const mid = 90;
            const distance = Math.abs(halfAngle - mid) / 180
            const speed = 13 - 12*distance;

            const x = Math.cos(radian) * speed;
            const y = Math.sin(radian) * speed;
            
            setCoordinates({x, y});
        };

        window.addEventListener('mousemove', watchCursor);
        return () => {
            window.removeEventListener('mousemove', watchCursor);
        }
    }, []);

    const handlePoke = () => {
        setPoked(true);
        onPoke();
    };

    return (<div className={`eye__wrapper ${poked ? 'eye__wrapper--poked' : ''}`}>
        <div className='eye' ref={eyeRef} onClick={handlePoke}>
            <div className='eye__pupil' style={{translate: `${x}px ${y}px`}}/>
        </div>
    </div>);
}