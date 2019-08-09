import React from "react";
import styles from "./ChordDiagramDisp.module.css";
import ChordDiagramItem from "../ChordDiagramDisp/ChordDiagramItem/ChordDiagramItem";

const ChordDiagramDisp = props => {
  return (
    <div className={styles.ChordDiagramDisp}>{props.children}
    </div>
  );
};

export default ChordDiagramDisp;
