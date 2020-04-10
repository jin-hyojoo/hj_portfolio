import React, {Component} from 'react';


class Footer extends Component{
    render(){
        return(
        <section id='footer'>
                <svg className="footer-frame" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" 
                    viewBox="0 0 1920 79">{/* <defs></defs> */}<title>footer-frame</title>
                    <path className="cls-2" d="M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,
                    293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,
                    89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z" transform="translate(0 -0.188)"/>
                </svg>
          <footer>
            <div className="row">
                <div className="twelve columns">
   
                    <ul className="social-links">
                        <li><a href="https://www.instagram.com/j.nyozu" target="_blank"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://github.com/jin-hyojoo" target="_blank"><i className="fa fa-github"></i></a></li>
                       {/*  <li><a href="https://nyojzufavthing.tistory.com/" target="_blank"><i className="fa fa-bookmark"></i></a></li> */}
                        <li><a href="https://nyozu.creatorlink.net/" target="_blank"><i className="fa fa-camera-retro"></i></a></li>
                    </ul>

                    <ul className="copyright">
                        <li>&copy; Copyright 2020 Jin-HyoJoo All rights reserved.</li>
                        <li>Original Design source <a title="Styleshout" href="http://www.styleshout.com/"> : Styleshout</a></li>   
                    </ul>

                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
             </div>
            </footer>
        </section>


);
    }
}

export default Footer;