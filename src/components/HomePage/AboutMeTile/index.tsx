import { certificates } from '../../../utils/certificates';
import HoloFrame from '../../HologramFrame';
import styles from './index.module.css';

const myAge = new Date().getFullYear() - 2002 - (new Date().getMonth() >= 10 ? 0 : 1);

const AboutMeTile = () => (
  <div className={styles['container']}>
    <HoloFrame
      style={{
        height: '70%',
        padding: 0,
      }}
    >
      <div className={styles['content-wrapper']}>
        <div className={styles['content']}>
          <HoloFrame light style={{ margin: 'auto' }}>
            <h2>About me:</h2>
          </HoloFrame>
          <p>
            I am Artemiy Bal, {myAge} years old. <br /> I am a typescript React developer with some
            good knowledge in Node.js libraries Express and Socket.io.
            <br /> I also know how to work with Next.js, Redux, Zustand and many other libraries.
            <br /> Programming for me is not only work but a great hobby.
          </p>
          <h4>My skills:</h4>
          <ul className={styles['ul']}>
            <li>
              <div className={styles['link-wrapper']}>
                <p>Frontend:</p>
              </div>
              <p>
                JavaScript, TypeScript, React, Next.js, Redux, Zustand, CSS3 (Sass), HTML5 (Flexbox,
                Grid), Tailwind, Bootstrap, npm, Figma, Semantic UI, Pixel-Perfect
              </p>
            </li>
            <li>
              <div className={styles['link-wrapper']}>
                <p>Backend:</p>
              </div>
              <p>Next.js, Node.js, Express, Socket.io, Flask</p>
            </li>
            <li>
              <div className={styles['link-wrapper']}>
                <p>Databases:</p>
              </div>
              <p>MySQL, Firebase, MongoDB</p>
            </li>
            <li>
              <div className={styles['link-wrapper']}>
                <p>Methodologies and tools:</p>
              </div>
              <p>Git (GitHub)</p>
            </li>
            <li>
              <div className={styles['link-wrapper']}>
                <p>Hosting:</p>
              </div>
              <p>Github pages, Heroku, Netlify, Railway</p>
            </li>
          </ul>
          <h4>Languages I speak:</h4>
          <ul className={styles['ul']}>
            <li>English (C1), </li>
            <li>Russian (Native), </li>
            <li>Belarusian (Native)</li>
          </ul>
          <h4>My education:</h4>
          <ul className={styles['ul']}>
            <li>Software Engineer, BSUIR affiliate MRC, Minsk</li>
            <li>Rolling scopes school courses</li>
            <li>Udemy courses</li>
          </ul>
          <h4>Certificates:</h4>
          <ul className={styles['ul']}>
            {certificates.map((el, id) => (
              <li key={id}>
                <div className={styles['link-wrapper']}>
                  <a href={el.url}>{el.name}</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HoloFrame>
  </div>
);

export default AboutMeTile;
