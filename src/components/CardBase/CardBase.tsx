import { useMemo, type CSSProperties, type ReactNode } from 'react';
import './CardBase.css';

type CardBaseProps = {
  children: ReactNode,
  isHidden: boolean,
  isBackFace?: boolean,
}

export function CardBase({children, isHidden, isBackFace}: CardBaseProps) {
  const colorStyle = useMemo(() => {
    const light = 'var(--primary-light)';
    const medium = 'var(--primary-medium)';

    return {
      '--dominant' : isBackFace ? medium : light,
      '--contrast' : isBackFace ? light : medium,
    };
  }, [isBackFace])

  return (
    <div style={colorStyle as CSSProperties} className={`card-base ${isHidden ? 'card-base--hidden': ''} ${isBackFace ? 'card-base--backface': ''}`}> 
      {children}
    </div>
  );
}