// components/Skeleton.js
import React from "react";
import styles from "./Skeleton.module.css";

const Skeleton = ({ width, height, className }) => (
  <div
    className={`${styles.skeleton} ${className}`}
    style={{ width, height }}
  />
);

export default Skeleton;
