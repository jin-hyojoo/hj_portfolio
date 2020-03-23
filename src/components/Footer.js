import React, {Component} from 'react';


class Footer extends Component{
    render(){
        return(
        <section id='footer'>
                <svg class="footer-frame" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" 
                    viewBox="0 0 1920 79">{/* <defs></defs> */}<title>footer-frame</title>
                    <path class="cls-2" d="M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,
                    293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,
                    89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z" transform="translate(0 -0.188)"/>
                </svg>
          <footer>
            <div class="row">
                <div class="twelve columns">
   
                    <ul class="social-links">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                    <li><a href="#"><i class="fa fa-skype"></i></a></li>
                    </ul>

                    <ul class="copyright">
                        <li>&copy; Copyright 2020 Jin-HyoJoo All rights reserved.</li>
                        <li>Original Design source <a title="Styleshout" href="http://www.styleshout.com/"> : Styleshout</a></li>   
                    </ul>

                </div>
                <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a></div>
             </div>
            </footer>
        </section>


);
    }
}

export default Footer;