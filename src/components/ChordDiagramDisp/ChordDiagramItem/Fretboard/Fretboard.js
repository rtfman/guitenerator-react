import React from "react";
import styles from "./Fretboard.module.css";
import Fret from "../Fret/Fret";

const Fretboard = props => {
  const frets = [0, 1, 2, 3, 4, 5];

  const fretDisplay = frets.map(el => {
    return (
      <li key={el}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </li>
    );
  });

  return (
    <div className={styles.fretboard}>
      <ol>
        <li>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </li>
      </ol>
      <ul>{fretDisplay}</ul>
    </div>
  );
};

export default Fretboard;
