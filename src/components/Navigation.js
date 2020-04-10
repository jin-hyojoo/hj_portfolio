import React, {Component} from 'react';

class Navigation extends Component{
    render(){
        return(
            /* Header Navigation */
               <nav id="nav-wrap">
                  <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                   <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
         
                  <ul id="nav" className="nav">
                     <li><a className="smoothscroll" href="#home">Home</a></li>
                     <li><a className="smoothscroll" href="#about">About</a></li>
                     <li><a className="smoothscroll" href="#skill">Skill</a></li>
                      <li><a className="smoothscroll" href="#project">Project</a></li>
                     <li><a className="smoothscroll" href="#contact">Contact</a></li>
                  </ul> 
               </nav> 
        );
    }
}

export default Navigation;