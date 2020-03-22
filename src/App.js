import React, {Component} from 'react';
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Navigation>ss</Navigation>
        <Title></Title>
        <About></About>
        <Skill></Skill>
        <Project></Project>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
