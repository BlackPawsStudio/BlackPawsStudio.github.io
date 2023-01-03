import { Fragment } from 'react';
import { demos } from '../../../utils/data';
import HoloFrame from '../../HologramFrame';
import DemoTile from './DemoTile';
import styles from './index.module.css';

const Projects = () => {
  return (
    <div className={styles['container']}>
      <h2>Deployed projects</h2>
      <HoloFrame
        style={{
          justifyContent: 'initial',
          maxHeight: '80%',
        }}
      >
        <div className={styles['content-wrapper']}>
          <div className={styles['tiles-container']}>
            {Object.keys(demos).map((el, id) => (
              <Fragment key={id}>
                <h3>{el}</h3>
                {demos[el].map((el, id) => (
                  <DemoTile data={el} key={id} />
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </HoloFrame>
    </div>
  );
};

export default Projects;
