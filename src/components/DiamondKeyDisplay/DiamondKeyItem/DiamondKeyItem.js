import React, { useState, useEffect } from "react";
import styles from "./DiamondKeyItem.module.css";


const diamondKeyItem = (props) => {

    const colorArrMap = props.colorArr.map((el, i) => {
      return (
        <li
          onClick={props.listColorClick}
          style={{ backgroundColor: [el.color] }}
          key={el.title + i}
        >
          {el.title}
        </li>
      );
    });

    return (
      <div className={styles.DiamondKeyItem}>
        <button
          style={{ backgroundColor: [props.diamondColor] }}
          onClick={props.colorKeyDropShow}
        >
          <p>{props.text}</p>
        </button>
        <ol
          style={
            props.showDropDown ? { display: "block" } : { display: "none" }
          }
        >
          {colorArrMap}
        </ol>
      </div>
    );

}

export default diamondKeyItem;
