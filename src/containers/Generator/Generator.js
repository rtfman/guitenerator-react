import React, { Component } from "react";
//import styles from "./Generator.module.css";
import Auxilliary from "../../hoc/Auxilliary";
import Menu from "../../components/Menu/Menu";
import DiamondKeyDisplay from "../../components/DiamondKeyDisplay/DiamondKeyDisplay";
import ChordDiagramDisp from '../../components/ChordDiagramDisp/ChordDiagramDisp'
import ChordDiagramItem from '../../components/ChordDiagramDisp/ChordDiagramItem/ChordDiagramItem'

class Generator extends Component {
  state = {
    rootArr: [
      "Root",
      "A",
      "A#/Bb",
      "B",
      "C",
      "C#/Db",
      "D",
      "D#/Eb",
      "E",
      "F",
      "F#/Gb",
      "G",
      "G#/Ab"
    ],
    qualArr: ["Quality", "Maj", "min", "Maj7", "min7"],
    exArr: ["Ex", "b9", "9", "#9", "11", "#11", "b5", "#5", "b13", "13"],
    rootChoice: "",
    qualChoice: "",
    ex1Choice: "",
    ex2Choice: "", 
    chordDiagramArr: [{root: 'A', quality: 'min7'}],
  };

  selectMenuChangeHandler = event => {
    this.setState({ [event.target.id]: event.target.value });
    //console.log(event.target.id);
  };

  generateClickHandler = () => {
    
    if (this.state.rootChoice != "" ) {
      this.setState({chordDiagramArr: [...this.state.chordDiagramArr, {root: this.state.rootChoice, quality: this.state.qualChoice ? this.state.qualChoice : ""}]})
    } else {
      alert('Bruh, you gotta at least choose a root')
    }
  };

  resetClickHandler = () => {
    this.setState({ rootChoice: "", qualChoice: "" });
  };

  deleteDiagramHandler = (event) => {
    let deleteIndex = this.state.chordDiagramArr;
    deleteIndex.splice(event.target.id, 1)
    this.setState({chordDiagramArr: deleteIndex});
  }



  render() {
    const diagramDisplay = this.state.chordDiagramArr.map((el, i) => {
      console.log('diagram render')
      return (
        <ChordDiagramItem key={i} id={i} root={el.root} qual={el.quality} deleteClick={this.deleteDiagramHandler}>
        </ChordDiagramItem>
      )
    })
    
    return (
      <Auxilliary>
        <Menu
          rootArr={this.state.rootArr}
          qualArr={this.state.qualArr}
          exArr={this.state.exArr}
          rootChanged={this.selectMenuChangeHandler}
          qualChanged={this.selectMenuChangeHandler}
          ex1Changed={this.selectMenuChangeHandler}
          ex2Changed={this.selectMenuChangeHandler}
          genClicked={this.generateClickHandler}
        />
        <DiamondKeyDisplay
          rootText="R"
          thirdText="3"
          fifthText="5"
          seventhText="7"
          ex1Text={this.state.ex1Text}
          ex2Text={this.state.ex2Text}
        />
        <ChordDiagramDisp> 
          {diagramDisplay}
        </ChordDiagramDisp>
      </Auxilliary>
    );
  }
}

export default Generator;
