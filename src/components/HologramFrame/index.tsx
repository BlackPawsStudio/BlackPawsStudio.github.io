import { CSSProperties, ReactNode } from 'react';
import styles from './index.module.css';

interface HoloFrameProps {
  style?: CSSProperties;
  children?: ReactNode | ReactNode[];
  light?: boolean;
  onClick?: () => void;
}

const HoloFrame = ({ children, style, light, onClick }: HoloFrameProps) => {
  return (
    <div className={styles['wrapper']} style={style || {}} onClick={onClick}>
      {light && (
        <>
          <div className={styles['light-l']} />
          <div className={styles['light-r']} />
        </>
      )}
      {children}
    </div>
  );
};

export default HoloFrame;
