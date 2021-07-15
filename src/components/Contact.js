import React, {Component} from 'react';
import ReactWOW from 'react-wow';

class Contact extends Component{
    render(){
        return(
            
            <section id="contact">
                <ReactWOW animation="fadeInLeftBig" duration="1.2s">
                    <h3><span>CONTACT</span></h3>
                    <p className="address">
                    {/* <i className="fa fa-user"></i> 
                        <i className="fa fa-home"></i>
                        <i className="fa fa-phone"></i>
                        <i className="fa fa-envelope"></i>*/}
                            <span>&#x1F917; 진효주 Jin HyooJoo&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>&#x1F3E1; Dongdaemoon-Gu, Seoul,  &#x1F1F0;&#x1F1F7;</span><br/>
                            <span>&#x1F4F1; (+82)  010 - 5507 - 7996&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span> 
                                <a href="mailto:hyojoo_97@naver.com">
                                &#x1F33C; &nbsp;hyojoo_97@naver.com</a></span>
                    </p>
            </ReactWOW>
            </section>


        );
    }
}
export default Contact;