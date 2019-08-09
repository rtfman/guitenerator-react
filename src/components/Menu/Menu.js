import React from "react";
import styles from "./Menu.module.css";
import MenuSelectItem from "../Menu/MenuSelectItem/MenuSelectItem";
import Button from "../Menu/Button/Button";

const menu = props => {
  return (
    <div className={styles.Menu}>
      <MenuSelectItem
        id="rootChoice"
        arr={props.rootArr}
        changed={props.rootChanged}
      />
      <MenuSelectItem
        id="qualChoice"
        arr={props.qualArr}
        changed={props.qualChanged}
      />
      <MenuSelectItem
        id="ex1Choice"
        arr={props.exArr}
        changed={props.ex1Changed}
      />
      <MenuSelectItem
        id="ex2Choice"
        arr={props.exArr}
        changed={props.ex2Changed}
      />
      <Button displayText="GENERATE" clicked={props.genClicked} />
      <Button displayText="RESET" clicked={props.resetClicked} />
    </div>
  );
};

export default menu;
