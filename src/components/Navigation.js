import React, {Component} from 'react';

class Navigation extends Component{
    render(){
        return(
            /* Header Navigation */
               <nav id="nav-wrap">
                  <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                   <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
         
                  <ul id="nav" class="nav">
                     <li class="current"><a class="smoothscroll" href="#home">Home</a></li>
                     <li><a class="smoothscroll" href="#about">About</a></li>
                      <li><a class="smoothscroll" href="#project">Project</a></li>
                     <li><a class="smoothscroll" href="#skill">Skill</a></li>
                     <li><a class="smoothscroll" href="#portfolio">Portfolio</a></li>
                     <li><a class="smoothscroll" href="#contact">Contact</a></li>
                  </ul> 
               </nav> 
        );
    }
}

export default Navigation;