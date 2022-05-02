import React from "react";
import styles from "./jumbotron.module.scss";

const Jumbotron = ({ children, styling, url, height = 750 }) => {
  const image = {
    backgroundImage: `url(${url})`,
    height: `${height}px`
  };
  return (
    <div className={styles.jumbotron} style={{ ...image, styling }}>
      {children}
    </div>
  );
};

export default Jumbotron;
