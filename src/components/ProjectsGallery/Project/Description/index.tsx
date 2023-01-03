import ReactMarkdown from 'react-markdown';
import HoloFrame from '../../../HologramFrame';
import styles from './index.module.css';

interface DescriptionProps {
  text: string;
}

const ProjectDescription = ({ text }: DescriptionProps) => {
  return (
    <div className={styles['container']}>
      <HoloFrame
        style={{
          width: '95%',
          height: '95%',
        }}
      >
        <div className={styles['content-wrapper']}>
          <div className={styles['content']}>
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </div>
      </HoloFrame>
    </div>
  );
};

export default ProjectDescription;
