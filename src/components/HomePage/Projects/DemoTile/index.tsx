import { DemoType } from '../../../../utils/data';
import styles from './index.module.css';

const DemoTile = ({ data }: { data: DemoType }) => {
  const { name, url, image } = data;
  return (
    <a className={`button ${styles['container']}`} href={url} target="blank">
      <div className={styles['shade']}/>
        <h4 className={styles['title']}>{name}</h4>
        <img className={styles['img']} src={image} alt={`${name}`} />
    </a>
  );
};

export default DemoTile;
