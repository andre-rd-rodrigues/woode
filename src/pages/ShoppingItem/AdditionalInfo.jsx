import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./additionalinfo.module.scss";

function AdditionalInfo({ item }) {
  const [selected, setSelected] = useState("description");

  const contentRendered = () => {
    if (selected === "description")
      return (
        <motion.p
          variants={variants}
          initial="hidden"
          exit="hidden"
          animate="visible"
        >
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
          tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
          amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
          luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
          tincidunt tempus. Donec vitae sapien ut libero venenatis.
        </motion.p>
      );
    return (
      <motion.div
        variants={variants}
        initial="hidden"
        exit="hidden"
        animate="visible"
        className="info-row"
      >
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
      </motion.div>
    );
  };
  const renderStyle = (type) => {
    if (type === selected) return "1px solid black";
    return null;
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
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
      <div id="body">
        <AnimatePresence>{contentRendered()}</AnimatePresence>
      </div>
    </div>
  );
}

export default AdditionalInfo;
