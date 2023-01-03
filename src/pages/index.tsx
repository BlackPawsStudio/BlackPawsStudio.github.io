import { useEffect, useState } from 'react';
import AboutMeTile from '../components/HomePage/AboutMeTile';
import Projects from '../components/HomePage/Projects';
import ProjectsGallery from '../components/HomePage/ProjectsGallery';
import WelcomeTile from '../components/HomePage/WelcomeTile';
import ParticlesComponent from '../components/Particles';
import Prism from '../components/Prism';
import styles from './index.module.css';

const HomePage = () => {
  const [isTransition, setIsTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsTransition(false);
    }, 500);
  }, []);

  const [slide, setSlide] = useState(0);
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
  const [clientHeight, setClientHeight] = useState(document.body.clientHeight);

  useEffect(() => {
    window.onload = () => {
      setClientWidth(document.body.clientWidth);
      setClientHeight(document.body.clientHeight);
    };
    window.onresize = () => {
      setClientWidth(document.body.clientWidth);
      setClientHeight(document.body.clientHeight);
    };
  }, []);

  return (
    <div
      className={styles['container']}
      style={{
        perspective: `${clientWidth / 3}px`,
      }}
    >
      <ParticlesComponent />
      <div
        className={styles['light']}
        style={{
          perspective: `${clientWidth / 3}px`,
        }}
      >
        <div />
      </div>
      <button
        className={styles['button'] + ' ' + styles['button-l']}
        onClick={() => setSlide(slide - 1)}
      >
        <div />
      </button>
      <button
        className={styles['button'] + ' ' + styles['button-r']}
        onClick={() => setSlide(slide + 1)}
      >
        <div />
      </button>
      <div
        className="prism-container"
        style={{
          perspective: `${clientWidth / 3}px`,
          transform: `translateZ(${clientWidth / 9}px)`,
        }}
      >
        <Prism
          outer
          showTile={slide}
          width={clientWidth}
          height={clientHeight}
          topColor={'transparent'}
          bottomColor={'var(--main-darker-color)'}
          border={'2px solid var(--main-color)'}
          sideColor={'linear-gradient(transparent, var(--main-darker-color))'}
          sides={[
            <WelcomeTile />,
            <Projects />,
            <AboutMeTile />,
            <ProjectsGallery setIsTransition={setIsTransition} />,
          ]}
        />
      </div>
      <div
        className={styles['transition-leave']}
        style={{
          opacity: isTransition ? '1' : '0',
          visibility: isTransition ? 'visible' : 'hidden',
        }}
      />
    </div>
  );
};

export default HomePage;
