import { useReducer } from 'react';
import { Eye } from '..';
import './Viewer.css';
import { viewerReducer } from './reducer';

export function Viewer() {
    const [{angriness}, dispatch] = useReducer(viewerReducer, {angriness: 0});

    const handleEyePoked = () => dispatch({type: 'get-angrier', data: undefined})

    return <div className='viewer'>
        <div className='viewer-sight' style={{'--angriness': angriness}}>
            <Eye onPoke={handleEyePoked}/>
            <Eye onPoke={handleEyePoked}/>
        </div>
    </div>;
}