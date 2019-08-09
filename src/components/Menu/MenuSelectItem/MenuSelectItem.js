import React from "react";
import styles from "./MenuSelectItem.module.css";
import MenuSelectItemOption from "../MenuSelectItem/MenuSelectItemOption/MenuSelectItemOption";

const MenuSelectItem = props => {
  const optionDisplay = props.arr.map((cur, index) => {
    return <MenuSelectItemOption value={cur} key={index} />;
  });

  return (
    <select
      id={props.id}
      arr={props.arr}
      className={styles.MenuSelectItem}
      onChange={props.changed}
    >
      {optionDisplay}
    </select>
  );
};

export default MenuSelectItem;
