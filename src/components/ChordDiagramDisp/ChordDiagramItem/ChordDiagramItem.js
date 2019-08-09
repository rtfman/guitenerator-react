import React from "react";
import styles from "./ChordDiagramItem.module.css";
import Fretboard from "../ChordDiagramItem/Fretboard/Fretboard";

const ChordDiagramItem = props => {
  return (
    <div
      className={[styles.ChordDiagramItem]}
      qual={props.qual}
      ex1={props.ex1}
    >
      {props.root}
      {props.qual}
      <button onClick={props.deleteClick} id={props.id}>
        X
      </button>
      <Fretboard />
    </div>
  );
};

export default ChordDiagramItem;
