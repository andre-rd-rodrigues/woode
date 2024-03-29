import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.scss";

function Button() {
  return (
    <div className={styles.button}>
      <svg height="150" width="150">
        <path
          d="M 120 18.75 A 61.25 61.25 0 1 1 30.45 44.00"
          fill="none"
          stroke="white"
          strokeWidth="3"
        ></path>
      </svg>
      <Link to="/shop">
        <button>View More</button>
      </Link>
    </div>
  );
}

export default Button;
