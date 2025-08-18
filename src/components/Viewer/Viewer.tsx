import { useContext, useReducer, type CSSProperties } from 'react';
import { Eye } from '..';
import './Viewer.css';
import { viewerReducer } from './reducer';
import { InvasiveViewersContext } from '../../context';

type ViewerProps = {
    rotated?: number;
    initialAngriness?: number;
}

export function Viewer({rotated, initialAngriness}: ViewerProps) {
    const [{angriness}, dispatch] = useReducer(viewerReducer, {angriness: initialAngriness ?? 0});
    const { addViewer } = useContext(InvasiveViewersContext);

    const handleEyePoked = () => {
        dispatch({type: 'get-angrier', data: undefined})
        if ( angriness >= 1 ) addViewer();
    };

    return <div className='viewer'>
        <div className='viewer-sight' style={{'--angriness': angriness} as CSSProperties}>
            <Eye onPoke={handleEyePoked} angriness={angriness} rotated={rotated}/>
            <Eye onPoke={handleEyePoked} angriness={angriness} rotated={rotated}/>
        </div>
    </div>;
}