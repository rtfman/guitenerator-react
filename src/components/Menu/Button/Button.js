import React from 'react';
import styles from './Button.module.css'; 
 
const Button = props => {
  return (
    <button className={styles.Button} onClick={props.clicked}>{props.displayText}</button>
  );
};
 
export default Button;