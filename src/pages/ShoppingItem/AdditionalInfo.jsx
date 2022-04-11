import React, { useState } from "react";
import styles from "./additionalinfo.module.scss";

function AdditionalInfo({ item }) {
  const [selected, setSelected] = useState("description");

  const renderBody = () => {
    if (selected === "description")
      return (
        <p>
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
          tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
          amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
          luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
          tincidunt tempus. Donec vitae sapien ut libero venenatis.
        </p>
      );
    return (
      <div className="info-row">
        <div>
          <p>WEIGHT:</p>
          <p>DIMENSIONS:</p>
          <p>SIZES:</p>
        </div>
        <div>
          <p>{item.weight}</p>
          <p>{item.dimensions}</p>
          <p>{item.sizes}</p>
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
