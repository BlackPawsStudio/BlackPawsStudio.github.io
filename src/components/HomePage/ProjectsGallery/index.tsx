import { useNavigate } from "react-router-dom";
import HoloFrame from "../../HologramFrame";
import styles from "./index.module.css";

interface ProjectsGalleryProps {
  setIsTransition: (param: boolean) => void;
}

const ProjectsGallery = ({ setIsTransition }: ProjectsGalleryProps) => {
  const navigate = useNavigate();

  const goToGallery = () => {
    setIsTransition(true);
    setTimeout(() => {
      navigate("/gallery");
    }, 500);
  };

  return (
    <div className={styles["container"]}>
      <HoloFrame
        style={{
          height: "70%",
          cursor: "pointer",
        }}
        light
        onClick={goToGallery}
      >
        <h2 className={`button ${styles["title"]}`}>Go to projects gallery</h2>
      </HoloFrame>
    </div>
  );
};

export default ProjectsGallery;
