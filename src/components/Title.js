import React, {Component} from 'react';

class Title extends Component{
    render(){
        return(
                <div className="row banner">
                    <div className="three columns">
                        <img className="profile-pic"  src="./images/profilepic.jpg" alt="photo" />
                    </div>
                    {/* <div className="cow"><p>&#x1F42E;</p></div> */}
                    <p>&#x1F42E;&#127946;&#127925;&#127908;&#127916;&#128247;&#127759;&#127793;&#127830;&#127856;&#129505;</p>
                  <div className="banner-text">
                     <h1 className="responsive-headline">Nyozu's Portfolio</h1>
                     <h3>I'm a Korea based <span>graphic designer</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and
                     effective visual identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling</a>
                     and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                     <hr />
                     <ul className="social">
                        <li><a href="https://www.instagram.com/j.nyojoo" target="_blank"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://github.com/jin-hyojoo" target="_blank"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://nyojzufavthing.tistory.com/" target="_blank"><i className="fa fa-bookmark"></i></a></li>
                        <li><a href="#"><i className="fa fa-camera-retro"></i></a></li>
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