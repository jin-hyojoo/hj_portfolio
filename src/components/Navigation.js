import React, {Component} from 'react';

class Navigation extends Component{
    render(){
        return(
            /* Header Navigation */
               <nav id="nav-wrap">     
                  <ul id="nav" className="nav">
                     <li><a className="smoothscroll" href="#home">Home</a></li>
                     <li><a className="smoothscroll" href="#about">About</a></li>
                     <li><a className="smoothscroll" href="#skill">Skill</a></li>
                      <li><a className="smoothscroll" href="#experience">Experience</a></li>
                     <li><a className="smoothscroll" href="#contact">Contact</a></li>
                  </ul> 
               </nav> 
        );
    }
}

export default Navigation;