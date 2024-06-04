import React, { useState } from "react";
import styles from "./additionalinfo.module.scss";

function AdditionalInfo({ item }) {
  const [selected, setSelected] = useState("description");
  const { weight, dimensions, sizes } = item.additional_info;

  const getSizes = () => {
    for (const [key, value] of Object.entries(sizes)) {
      return (
        <p>
          {key}: {value}
        </p>
      );
    }
  };

  const renderBody = () => {
    if (selected === "description") return <p>{item.description}</p>;
    return (
      <div className="info-row">
        <div>
          <p>WEIGHT:</p>
          <p>DIMENSIONS:</p>
          <p>SIZES:</p>
        </div>
        <div>
          <p>{weight}</p>
          <p>{dimensions}</p>
          {getSizes()}
        </div>
      </div>
    );
  };
  const renderStyle = (type) => {
    if (type === selected) return "1px solid black";
    return null;
  };
  return (
    <div className={styles.additionalInfo}>
      <div id="head">
        <button onClick={() => setSelected("description")}>
          <h4
            style={{
              borderBottom: renderStyle("description")
            }}
          >
            Description
          </h4>
        </button>
        <button onClick={() => setSelected("info")}>
          <h4
            style={{
              borderBottom: renderStyle("info")
            }}
          >
            Info
          </h4>
        </button>
      </div>
      <hr />
      <div id="body">{renderBody()}</div>
    </div>
  );
}

export default AdditionalInfo;
