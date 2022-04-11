import React, { useEffect, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import styles from "./loading.module.scss";

const Loading = ({
  color = "rgb(54, 215, 183)",
  loading,
  size = 20,
  type = "SyncLoader"
}) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(document.body.scrollHeight + 100);
  }, []);

  switch (type) {
    case "SyncLoader":
      return (
        <div
          className={styles.loader}
          style={{
            height
          }}
        >
          <SyncLoader color={color} loading={loading} size={size} />
        </div>
      );
    default:
      return null;
  }
};

export default Loading;
