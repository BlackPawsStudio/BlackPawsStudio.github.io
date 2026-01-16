import HoloFrame from '../../HologramFrame';
import styles from './index.module.css';

const WelcomeTile = () => {
  return (
    <div className={styles['container']}>
      <HoloFrame light>
        <h2 className={styles['heading']}>Welcome to projects gallery!</h2>
        <h3 className={styles['heading']}>Here are all my projects that you can check out!</h3>
        <p>To see project details, switch to it using side arrows and click to open</p>
        <p>To switch project views, click side arrows</p>
        <p>To go back from the project click arrow on the bottom</p>
        <p className={styles['info']}>If you want to go back to the main page, click bottom button when you are in gallery</p>
      </HoloFrame>
    </div>
  );
};

export default WelcomeTile;
