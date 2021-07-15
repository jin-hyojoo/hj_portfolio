import React, {Component} from 'react';
import ReactWOW from 'react-wow';
import Typing from 'react-typing-animation';

class Experience extends Component{
    render(){
        return(
            <section id="experience">
                <ReactWOW animation="bounceInUp" duration="2s">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="section-title text-center pb-30">
                                <h3 className="title"><span>EXPERIENCE</span></h3>
                                <p className="text">쉽게 사용할 수 있는 웹사이트 개발을 목표로<br></br> 
                                로고디자인 및 프론트 - 백엔드 기능개발까지 폭넓게 참여하였습니다 </p>
                            </div> 
                        </div>
                    </div> {/* end row justify */}
                    
                    <div>

                    </div>
                </div> 
                </ReactWOW>
            </section>
        );
    }
}

export default Experience;