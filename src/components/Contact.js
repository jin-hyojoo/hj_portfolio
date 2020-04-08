import React, {Component} from 'react';
import ReactWOW from 'react-wow';

class Contact extends Component{
    render(){
        return(
            
            <section id="contact">
                <ReactWOW animation="bounceInUp" animation-ieration-count="infinity" duration="2s">
                    <h3><span>CONTACT</span></h3>
                    <p className="address">
                            <span><i className="fa fa-user"></i> 진효주 Jin HyooJoo&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span><i className="fa fa-home"></i> Dongdaemoon-Gu, Seoul,  &#x1F1F0;&#x1F1F7;</span><br/>
                            <span><i className="fa fa-phone"></i> (+82)  010 - 5507 - 7996&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span><i className="fa fa-envelope"></i> 
                                <a href="mailto:hyojoo_97@naver.com">
                                    &nbsp;hyojoo_97@naver.com</a></span>
                    </p>
            </ReactWOW>
            </section>


        );
    }
}
export default Contact;