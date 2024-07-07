// components/ProjectCardSkeleton.js
import React from "react";
import styles from "./ProjectCardSkeleton.module.css";
import Skeleton from "../Skeleton/Skeleton";

const ProjectCardSkeleton = ({ type }) => {
  return (
    <div className="ProgramBox_Reversed">
      {type === "regular" && (
        <>
          <Skeleton className="ProgramBox_Image" height="100%" width="50%" />
          <div style={{ height: "8px", fontSize: "4px" }}>
            <span>&nbsp;</span>
          </div>
        </>
      )}
      <div
        style={{
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          verticalAlign: "middle",
          height: "100%",
        }}
      >
        <Skeleton className={styles.title} height={20} width="10rem" />
        <Skeleton className={styles.text} height={10} />
        <Skeleton className={styles.text} height={10} />
        <Skeleton className={styles.text} height={10} />
        <Skeleton className={styles.text} height={10} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "bottom",
            verticalAlign: "middle",
          }}
        >
          <button style={{ flexGrow: 1, margin: "0 3px 0 0" }}>
            <Skeleton className={styles.button} width={100} />
          </button>
        </div>
      </div>

      {type === "reversed" && (
        <>
          <div style={{ height: "8px", fontSize: "4px" }}>
            <span>&nbsp;</span>
          </div>
          <Skeleton className="ProgramBox_Image" height="100%" width="100%" />
        </>
      )}
    </div>
  );
};

export default ProjectCardSkeleton;
