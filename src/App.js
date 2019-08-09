import React, { Component } from "react";
//import styles from 'CssModule'
import Layout from "../src/components/Layout/Layout";
import Builder from './containers/Generator/Generator'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Builder/>
        </Layout>
      </div>
    );
  }
}

export default App;
