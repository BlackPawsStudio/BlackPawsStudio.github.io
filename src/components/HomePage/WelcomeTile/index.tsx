import HoloFrame from '../../HologramFrame';
import styles from './index.module.css';

const WelcomeTile = () => {
  return (
    <div className={styles['container']}>
      <HoloFrame light>
        <h1 className={styles['heading']}>Welcome to my CV!</h1>
        <h4 className={styles['heading']}>Hi! I'm Artsemi Bal, React full-stack developer</h4>
        <p>This is my interactive CV where you can find all my projects and demos!</p>
        <p className={styles['info']}>
          Navigate between slides in this 3d room by clicking arrows on the sides of the screen
        </p>
      </HoloFrame>
    </div>
  );
};

export default WelcomeTile;
