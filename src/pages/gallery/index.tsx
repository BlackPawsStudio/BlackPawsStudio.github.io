import 'swiper/css';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ParticlesComponent from '../../components/Particles';
import Prism from '../../components/Prism';
import Project from '../../components/ProjectsGallery/Project';
import ProjectDescription from '../../components/ProjectsGallery/Project/Description';
import ProjectDemo from '../../components/ProjectsGallery/Project/Demo';
import ProjectTitleSide from '../../components/ProjectsGallery/Project/Title';
import WelcomeTile from '../../components/ProjectsGallery/Welcome';
import { demos } from '../../utils/data';
import styles from '../index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const projectsArr = Object.values(demos)
  .flat()
  .map((el, id) => {
    el.id = id;
    return el;
  })
  .reverse();

const isDesktop = document.body.clientWidth > 1100;

const GalleryPage = () => {
  const [slide, setSlide] = useState(0);
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
  const [clientHeight, setClientHeight] = useState(document.body.clientHeight);

  const [isZoomed, setIsZoomed] = useState(false);

  const [projectSlide, setProjectSlide] = useState(0);

  const [currentProject, setCurrentProject] = useState(0);

  const navigate = useNavigate();

  const [isTransition, setIsTransition] = useState(true);

  const lButton = useRef(null);
  const rButton = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsTransition(false);
    }, 500);
  }, []);

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

  const leftButtonClick = () => {
    if (isZoomed) {
      setProjectSlide(projectSlide + 1);
    } else {
      setSlide(slide - 1);
    }
  };

  const rightButtonClick = () => {
    if (isZoomed) {
      setProjectSlide(projectSlide - 1);
    } else {
      setSlide(slide + 1);
    }
  };

  const backButtonClick = () => {
    setCurrentProject(0);
    if (isZoomed) {
      setIsZoomed(false);
    } else {
      setIsTransition(true);
      setTimeout(() => {
        navigate('/');
      }, 500);
    }
  };

  useEffect(() => {
    if (!isZoomed) {
      setProjectSlide(0);
    }
  }, [isZoomed]);

  console.log(currentProject);

  return isDesktop ? (
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
      <h2
        className={styles['page-title']}
        style={{
          opacity: isZoomed ? '0' : '1',
        }}
      >
        PROJECTS GALLERY
      </h2>
      <button className={styles['button'] + ' ' + styles['button-b']} onClick={backButtonClick}>
        <div />
      </button>
      <button className={styles['button'] + ' ' + styles['button-l']} onClick={leftButtonClick}>
        <div />
      </button>
      <button className={styles['button'] + ' ' + styles['button-r']} onClick={rightButtonClick}>
        <div />
      </button>
      <div
        className="prism-container"
        style={{
          perspective: `${clientWidth / 3}px`,
          transform: `translateZ(${clientWidth / (isZoomed ? 4.5 : 9)}px)`,
          opacity: isZoomed ? 0 : 1,
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
            ...projectsArr.map((el, _, arr) => (
              <Project
                zoom={() => {
                  if (
                    el.id ===
                    (slide > 0
                      ? (slide % (arr.length + 1)) - 1
                      : arr.length - (Math.abs(slide) % (arr.length + 1)))
                  ) {
                    setIsZoomed(!isZoomed);
                    setCurrentProject(projectsArr.length - el.id - 1);
                  }
                }}
                isZoomed={isZoomed}
                data={el}
              />
            )),
          ]}
        />
      </div>
      {isZoomed && (
        <div
          className={styles['project-container']}
          style={{
            perspective: `${clientWidth / 2}px`,
          }}
        >
          <Prism
            showTile={projectSlide}
            border="3px solid var(--main-color)"
            width={clientWidth / 2}
            height={clientHeight / 2}
            bottomColor={'var(--main-darker-color)'}
            sides={[
              <ProjectTitleSide
                title={projectsArr[currentProject].name}
                image={projectsArr[currentProject].image}
              />,
              <ProjectDescription data={projectsArr[currentProject]} />,
              <ProjectDemo
                link={projectsArr[currentProject].url}
                image={projectsArr[currentProject].image}
              />,
            ]}
          />
        </div>
      )}
      <div
        className={styles['transition-leave']}
        style={{
          opacity: isTransition ? '1' : '0',
          visibility: isTransition ? 'visible' : 'hidden',
        }}
      />
    </div>
  ) : (
    <div className={styles['container']}>
      <div
        className={styles['light']}
        style={{
          perspective: `${clientWidth / 3}px`,
        }}
      >
        <div />
      </div>
      <h2
        className={styles['page-title']}
        style={{
          opacity: isZoomed ? '0' : '1',
        }}
      >
        PROJECTS GALLERY
      </h2>
      <button className={styles['button'] + ' ' + styles['button-b']} onClick={backButtonClick}>
        <div />
      </button>
      <button
        className={styles['button'] + ' ' + styles['button-l']}
        ref={lButton}
        onClick={leftButtonClick}
      >
        <div />
      </button>
      <button
        className={styles['button'] + ' ' + styles['button-r']}
        ref={rButton}
        onClick={rightButtonClick}
      >
        <div />
      </button>
      <ParticlesComponent />
      <div
        className={styles['swiper-container']}
        style={{
          display: isZoomed ? 'none' : 'flex',
        }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          modules={[Navigation]}
          navigation={{
            prevEl: lButton.current,
            nextEl: rButton.current,
          }}
          onSlideChange={(swiper) => {
            if (!isZoomed && swiper.realIndex - 1 >= 0) {
              console.log('ind', swiper.realIndex);
              
              setCurrentProject(projectsArr.length - swiper.realIndex);
            }
          }}
        >
          <SwiperSlide>
            <WelcomeTile />
          </SwiperSlide>
          {Object.values(demos)
            .flat()
            .map((el, id) => {
              el.id = id;
              return el;
            })
            .map((el, id) => (
              <SwiperSlide key={id}>
                <Project
                  zoom={() => {
                    setIsZoomed(!isZoomed);
                  }}
                  isZoomed={isZoomed}
                  data={el}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {isZoomed && <ProjectDescription data={projectsArr[currentProject]} />}
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

export default GalleryPage;
