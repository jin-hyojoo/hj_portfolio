import React, {Component} from 'react';
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Project from "./components/Project"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";





import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        <header id="home">
          <Navigation></Navigation>
          <Title></Title>
        </header>
        
        <About></About>
        <Skill></Skill>
        <Experience></Experience>
        {/*<Project></Project>*/}
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
