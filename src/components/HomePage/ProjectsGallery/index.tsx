import HoloFrame from "../../HologramFrame";
import styles from "./index.module.css";

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
          src={
            "https://res.cloudinary.com/dxyapxi2t/image/upload/v1698396341/Screenshot_2023-10-27_at_11.45.24_sikuhl.png"
          }
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
