import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';
import AboutMeTile from '../components/HomePage/AboutMeTile';
import Projects from '../components/HomePage/Projects';
import ProjectsGallery from '../components/HomePage/ProjectsGallery';
import WelcomeTile from '../components/HomePage/WelcomeTile';
import ParticlesComponent from '../components/Particles';
import Prism from '../components/Prism';
import styles from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ReactHotkeys from 'react-hot-keys';

const isDesktop = document.body.clientWidth > 1100;

const HomePage = () => {
  const [isTransition, setIsTransition] = useState(true);

  const lButton = useRef(null);
  const rButton = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsTransition(false);
    }, 1000);
  }, []);

  const [slide, setSlide] = useState(0);
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
  const [clientHeight, setClientHeight] = useState(document.body.clientHeight);

  useEffect(() => {
    setTimeout(() => {
      setClientWidth(document.body.clientWidth);
      setClientHeight(document.body.clientHeight);
    }, 500);
    if (isDesktop) {
      window.onresize = () => {
        setClientWidth(document.body.clientWidth);
        setClientHeight(document.body.clientHeight);
      };
    }
  }, []);

  return isDesktop ? (
    <div
      className={styles["container"]}
      style={{
        perspective: `${clientWidth / 3}px`,
      }}
    >
      {/* <ParticlesComponent /> */}
      <div
        className={styles["light"]}
        style={{
          perspective: `${clientWidth / 3}px`,
        }}
      >
        <div />
      </div>
      <button
        className={styles["button"] + " " + styles["button-l"]}
        onClick={() => setSlide(slide - 1)}
      >
        <span />
        <div />
      </button>
      <button
        className={styles["button"] + " " + styles["button-r"]}
        onClick={() => setSlide(slide + 1)}
      >
        <span />
        <div />
      </button>
      <div
        className="prism-container"
        style={{
          perspective: `${clientWidth / 3}px`,
          transform: `translateZ(${clientWidth / 9}px)`,
        }}
      >
        <ReactHotkeys keyName="left, a" onKeyDown={() => setSlide(slide - 1)}>
          <ReactHotkeys
            keyName="right, d"
            onKeyDown={() => setSlide(slide + 1)}
          >
            <Prism
              outer
              showTile={slide}
              width={clientWidth}
              height={clientHeight}
              topColor={"transparent"}
              bottomColor={"var(--main-darker-color)"}
              border={"2px solid var(--main-color)"}
              sideColor={
                "linear-gradient(transparent, var(--main-darker-color))"
              }
              sides={[
                <WelcomeTile />,
                <Projects />,
                <AboutMeTile />,
                <ProjectsGallery setIsTransition={setIsTransition} />,
              ]}
            />
          </ReactHotkeys>
        </ReactHotkeys>
      </div>
      <div
        className={styles["transition-leave"]}
        style={{
          opacity: isTransition ? "1" : "0",
          visibility: isTransition ? "visible" : "hidden",
        }}
      />
    </div>
  ) : (
    <div className={styles["container"]}>
      <div
        className={styles["light"]}
        style={{
          perspective: `${clientWidth / 3}px`,
        }}
      >
        <div />
      </div>
      <ParticlesComponent />
      <button
        className={styles["button"] + " " + styles["button-l"]}
        onClick={() => setSlide(slide - 1)}
        ref={lButton}
      >
        <div />
      </button>
      <button
        className={styles["button"] + " " + styles["button-r"]}
        onClick={() => setSlide(slide + 1)}
        ref={rButton}
      >
        <div />
      </button>
      <div className={styles["swiper-container"]}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          modules={[Navigation]}
          navigation={{
            prevEl: lButton.current,
            nextEl: rButton.current,
          }}
        >
          <SwiperSlide>
            <WelcomeTile />
          </SwiperSlide>

          <SwiperSlide>
            <AboutMeTile />
          </SwiperSlide>

          <SwiperSlide>
            <ProjectsGallery setIsTransition={setIsTransition} />
          </SwiperSlide>

          <SwiperSlide>
            <Projects />
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className={styles["transition-leave"]}
        style={{
          opacity: isTransition ? "1" : "0",
          visibility: isTransition ? "visible" : "hidden",
        }}
      />
    </div>
  );
};

export default HomePage;
