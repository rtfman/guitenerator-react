import React from "react";
import styles from "./MenuSelectItemOption.module.css";

const MenuSelectItemOption = props => {
  return (
    <option className={styles.MenuSelectItemOption} value={props.value}>
      {props.value}
    </option>
  );
};

export default MenuSelectItemOption;
