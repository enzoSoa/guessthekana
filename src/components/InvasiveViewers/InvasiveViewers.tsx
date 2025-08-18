import { useContext } from 'react';
import { Viewer } from '../Viewer';
import './InvasiveViewers.css';
import { InvasiveViewersContext } from '../../context';

export function InvasiveViewers() {
    const {viewers} = useContext(InvasiveViewersContext); 

    return <div className='invasive-viewers'>
        {viewers.map(({ x, y, scale, angle }, index) => 
            <div 
                key={index}
                className='invasive-viewers__viewer'
                style={{
                    top: `${y}%`,
                    left: `${x}%`,
                    rotate: `${angle}deg`,
                    scale
                }}
            >
                <Viewer rotated={-angle} initialAngriness={1}/>
            </div>
        )}
    </div>;
}