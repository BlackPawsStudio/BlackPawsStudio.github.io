import HoloFrame from "../../HologramFrame";
import styles from "./index.module.css";
import Gallery from "../../../projects/cv.png";

interface ProjectsGalleryProps {
  openGallery: () => void;
}

const ProjectsGallery = ({ openGallery }: ProjectsGalleryProps) => {
  const goToGallery = () => {
    openGallery();
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
        <img
          className={styles["image"]}
          src={Gallery}
          width={400}
          height={400}
          alt=""
        />
        <h2 className={`button ${styles["title"]}`}>Go to projects gallery</h2>
      </HoloFrame>
    </div>
  );
};

export default ProjectsGallery;
