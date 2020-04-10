import React, {Component} from 'react';
import Typing from 'react-typing-animation';

class Title extends Component{
    render(){
        return(
                <div className="row banner">
                    <div className="three columns">
                        <img className="profile-pic"  src="./images/profilepic.jpg" alt="photo" />
                    </div>
                                                                                                     {/* 이모티콘 나열 */}
                    <p>&#x1F42E;&#127946;&#127925;&#127908;&#127916;&#128247;&#127759;&#127793;&#127830;&#127856;&#129505;</p>
                  {/* <div className="banner-text"> */}
                    <div class="wrapper">
                         {/* <Typing speed={120}><h1>Nyozu's Portfolio</h1></Typing> */}
                         <h1>Nyozu's Portfolio</h1>
                    </div>
                    <div className="banner-text">
                     <h3>
                         I'm not a professional <span>Front-EndDeveloper </span>
                         &nbsp;But, I have full of desire to apply the <span>new technology </span> <br></br>
                         &nbsp; So I want to believe that  will become a <span>good Developer </span> <br></br>And If possible, I would like to know about the 
                         <span> Back-EndDeveloper</span></h3>
                     <hr />
                     <ul className="social">
                        <li><a href="https://www.instagram.com/j.nyozu" target="_blank"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://github.com/jin-hyojoo" target="_blank"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://nyojzufavthing.tistory.com/" target="_blank"><i className="fa fa-bookmark"></i></a></li>
                        <li><a href="https://nyozu.creatorlink.net/" target="_blank"><i className="fa fa-camera-retro"></i></a></li>
                     </ul>
                  </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>
               </div>

               
        );
    }
}

export default Title;