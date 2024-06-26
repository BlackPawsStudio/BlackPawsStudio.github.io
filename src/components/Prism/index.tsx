import { Fragment, ReactNode } from "react";
import Side from "./Side";
import styles from "./index.module.css";

interface FigureProps {
  width: number;
  height: number;
  sides: ReactNode[];
  topColor?: string;
  sideColor?: string;
  bottomColor?: string;
  border?: string;
  showTile?: number;
  outer?: boolean;
}

const Prism = ({
  outer,
  width,
  height,
  sides,
  topColor,
  sideColor,
  bottomColor,
  border,
  showTile,
}: FigureProps) => {
  const size =
    (width * Math.sin((360 / (sides.length * 2) / 180) * Math.PI)) /
    Math.sin((90 / 180) * Math.PI);
  const space =
    ((width / 2) *
      Math.sin(((90 - 360 / (sides.length * 2)) / 180) * Math.PI)) /
    Math.sin((90 / 180) * Math.PI);
  return (
    <div
      className={styles["container"]}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: outer ? "rotateY(180deg)" : "",
      }}
    >
      {sides.map((el, id) => (
        <Fragment key={id}>
          {topColor &&
            topColor !== "transparent" &&
            !(
              topColor.length === 9 &&
              topColor[7] === "0" &&
              topColor[8] === "0"
            ) && (
              <Side
                customStyle={{
                  width: `${size}px`,
                  height: 0,
                  transformOrigin: "top",
                  borderBottom: `${space}px solid ${topColor || "transparent"}`,
                  borderRight: `${size / 2}px solid transparent`,
                  borderLeft: `${size / 2}px solid transparent`,
                  borderTop: "0",
                  transform: `translateX(${(width - size) / 2}px) rotateY(${
                    (360 / sides.length) * id +
                    (showTile ? showTile * (360 / sides.length) : 0)
                  }deg) translateZ(${space}px) rotateX(90deg) translateY(-${space}px)`,
                }}
              />
            )}
          <Side
            customStyle={{
              width: `${size}px`,
              background: sideColor || "transparent",
              border: border ? border : "none",
              transform: `translateX(${(width - size) / 2}px) rotateY(${
                (360 / sides.length) * id +
                (showTile ? showTile * (360 / sides.length) : 0)
              }deg) translateZ(${space}px)`,
              overflow: "hidden",
            }}
          >
            {el}
          </Side>
          {bottomColor &&
            bottomColor !== "transparent" &&
            !(
              bottomColor?.length === 9 &&
              bottomColor[7] === "0" &&
              bottomColor[8] === "0"
            ) && (
              <Side
                customStyle={{
                  width: `${size}px`,
                  height: "0",
                  bottom: 0,
                  transformOrigin: "bottom",
                  borderTop: `${space}px solid ${bottomColor || "transparent"}`,
                  borderRight: `${size / 2}px solid transparent`,
                  borderLeft: `${size / 2}px solid transparent`,
                  borderBottom: "0",
                  transform: `translateX(${(width - size) / 2}px) rotateY(${
                    (360 / sides.length) * id +
                    (showTile ? showTile * (360 / sides.length) : 0)
                  }deg) translateZ(${space}px) rotateX(-90deg) translateY(${space}px)`,
                }}
              />
            )}
        </Fragment>
      ))}
    </div>
  );
};

export default Prism;
