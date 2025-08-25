import { Eye } from '../Eye';
import './ToggleMemoButton.css';

type ToggleMemoButtonProps = {
    isShown: boolean;
    onClick: () => void;
};

export function ToggleMemoButton({isShown, onClick}: ToggleMemoButtonProps) {

    return (
        <button 
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
    );
}