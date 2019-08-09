import React, { useState, useEffect } from "react";
import styles from "./DiamondColorKeyHook.module.css";

const DiamondColorKeyHook = props => {
  const colorArr = ["red", "grey", "blue", "green", "orange", "purple", "teal"];
  const [showDrop, changeDrop] = useState(false);
  const [color, colorChange] = useState("grey");

  const showDropToggle = () => {
    showDrop ? changeDrop(false) : changeDrop(true);
  };

  const colorChangeHandler = el => {
    colorChange(el);
    showDropToggle();
  };

  const colorArrMap = colorArr.map((el, i) => {
    return (
      <li
        onClick={() => colorChangeHandler(el)}
        style={{
          backgroundColor: [el],
          display: showDrop ? "block" : "none"
        }}
        key={el + i}
      />
    );
  });

  useEffect(() => {
    colorChange("grey");
  }, [props.reset]);

  return (
    <div className={styles.DiamondColorKeyHook} onClick={showDropToggle}>
      <p className={styles.p}>{props.diamondText}</p>
      <button style={{ backgroundColor: [color] }} />
      <ol style={{}}>{colorArrMap}</ol>
    </div>
  );
};

export default DiamondColorKeyHook;
