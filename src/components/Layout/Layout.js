import React from 'react'
//import styles from './Layout.module.css';
import Auxilliary from '../../hoc/Auxilliary'
 
const layout = props => {
  return (
    <Auxilliary>
        <div>Toolbar, Dropdown/SideDrawer</div>
        <main>{props.children}</main>
    </Auxilliary>
  );
};
 
export default layout;