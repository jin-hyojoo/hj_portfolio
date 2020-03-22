import React, {Component} from 'react';

class Title extends Component{
    render(){
        return(
                <div class="row banner">
                  <div class="banner-text">
                     <h1 class="responsive-headline">Nyozu's Portfolio</h1>
                     <h3>I'm a Korea based <span>graphic designer</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and
                     effective visual identities for companies of all sizes around the globe. Let's <a class="smoothscroll" href="#about">start scrolling</a>
                     and learn more <a class="smoothscroll" href="#about">about me</a>.</h3>
                     <hr />
                     <ul class="social">
                        <li><a href="https://www.instagram.com/j.nyojoo" target="_blank"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="https://github.com/jin-hyojoo" target="_blank"><i class="fa fa-github"></i></a></li>
                        <li><a href="https://nyojzufavthing.tistory.com/" target="_blank"><i class="fa fa-bookmark"></i></a></li>
                        <li><a href="#"><i class="fa fa-camera-retro"></i></a></li>
                     </ul>
                  </div>

                    <p class="scrolldown">
                        <a class="smoothscroll" href="#about"><i class="icon-down-circle"></i></a>
                    </p>
               </div>
        );
    }
}

export default Title;