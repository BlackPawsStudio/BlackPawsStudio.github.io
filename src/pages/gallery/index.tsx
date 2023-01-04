import 'swiper/css';
import { useEffect, useState } from 'react';
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
                    console.log(projectsArr.length - el.id - 1);

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
              <ProjectDescription text={projectsArr[currentProject].description} />,
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
      <ParticlesComponent />
      <div className={styles['swiper-container']}>
        <Swiper slidesPerView={1} spaceBetween={30} loop={true}>
          <SwiperSlide>
            <WelcomeTile />
          </SwiperSlide>
          {Object.values(demos)
            .flat()
            .map((el, id) => {
              el.id = id;
              return el;
            })
            .map((el, _, arr) => (
              <SwiperSlide>
                <Project
                  zoom={() => {
                    if (
                      el.id ===
                      (slide > 0
                        ? (slide % (arr.length + 1)) - 1
                        : arr.length - (Math.abs(slide) % (arr.length + 1)))
                    ) {
                      setIsZoomed(!isZoomed);
                      console.log(projectsArr.length - el.id - 1);

                      setCurrentProject(projectsArr.length - el.id - 1);
                    }
                  }}
                  isZoomed={isZoomed}
                  data={el}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryPage;
