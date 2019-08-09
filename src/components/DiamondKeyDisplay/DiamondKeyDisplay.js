import React, { useState, useEffect } from "react";
import styles from "./DiamondKeyDisplay.module.css";
// import DiamondKeyItem from "./DiamondKeyItem/DiamondKeyItem";
// import DiamondColorKey from "../DiamondKeyDisplay/DiamondColorKeyHook/DiamondColorKeyHook"
import DiamondColorKeyHook from "../DiamondKeyDisplay/DiamondColorKeyHook/DiamondColorKeyHook";

const DiamondKeyDisplay = props => {
  const [diamondKeyArr, diamondKeyDropState] = useState([
    { text: "R", drop: false },
    { text: "3", drop: false },
    { text: "5", drop: false },
    { text: "7", drop: false },
    { text: "ex", drop: false },
    { text: "ex", drop: false }
  ]);
  const [showDrop, changeDrop] = useState(false);
  const [colorReset, colorResetter] = useState(false);

  let showDropToggle = () => {
    showDrop ? changeDrop(false) : changeDrop(true);
  };

  const colorResetToggle = () => {
    colorReset ? colorResetter(false) : colorResetter(true);
  };

  const tester = () => {
    diamondKeyDropState()
  }

  const keyColorDisplay = diamondKeyArr.map((el, i) => {
    
    return (
      <DiamondColorKeyHook
        key={i}
        diamondText={el.text}
        reset={colorReset}
        showDrop={el.drop}
        showDropToggle={showDropToggle}
      />
    );
  });

  return (
    <div className={styles.DiamondKeyDisplay}>
      {keyColorDisplay}
      <button key="btn" onClick={colorResetToggle} className={styles.button}>
        RESET
      </button>
    </div>
  );
};

export default DiamondKeyDisplay;
