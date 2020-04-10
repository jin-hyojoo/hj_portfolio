import React, {Component} from 'react';
import ReactWOW from 'react-wow';
import Typing from 'react-typing-animation';

class Project extends Component{
    render(){
        return(
            <section id="project">
                <ReactWOW animation="bounceInUp" duration="2s">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="section-title text-center pb-30">
                                <h3 className="title"><span>PROJECT</span></h3>
                                <p className="text">쉽게 사용할 수 있는 웹사이트 개발을 목표로<br></br> 로고디자인 및 기능개발까지 폭넓게 참여하였습니다 </p>
                            </div> 
                        </div>
                    </div> {/* end row justify */}
                    <div className="project-box"/* class="row" */>
                        <div className="col-lg-4-col-sm-6" id="imgBox">
                            <div className="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                <div className="team-image">
                                    <img src="/images/team-1.jpg" alt="Team"></img>
                                </div>
                                <div className="team-content">
                                    <div className="team-social">
                                        <ul className="social">
                                            <li><a href= "https://drive.google.com/file/d/1VTMVVmJk1e7VCqOs_9nrcZgal86GJbxU/view?usp=sharing" target="_blank"><i className="fa fa-plus"></i></a></li>
                                            {/* <li><a href="#"><i className="fa fa-github"></i></a></li> */}
                                        </ul>
                                    </div>
                                    <h4 className="team-name"><a href="#">memoG</a></h4>
                                    <span className="sub-title">메모장 기능 기반 웹사이트
                                        <br></br>#Java #oracle #html #css #js
                                    </span>
                                </div>{/* end team-content */}
                            </div>{/* end teadm style-eleven */}
                        </div>{/* end col-lg-4 , 카드섹션 (1)*/}

                        <div className="col-lg-4-col-sm-6" id="imgBox">
                            <div className="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                <div className="team-image" >
                                    <img src="/images/team-2.jpg" alt="Team"></img>
                                </div>
                                <div className="team-content">
                                    <div className="team-social">
                                        <ul className="social">
                                            <li><a href="https://drive.google.com/file/d/119HKSp8hq3hCGna_WVRXmVFgpZV_X0MU/view?usp=sharing" target="_blank"><i className="fa fa-plus"></i></a></li>
                                        </ul>
                                    </div>
                                    <h4 className="team-name"><a href="#">수락간</a></h4>
                                    <span className="sub-title">커스텀 가능한 도시락 주문 웹사이트
                                        <br></br>#springMVC #Java #oracle
                                    </span>
                                </div>{/* end team-content */}
                            </div>{/* end teadm style-eleven */}
                        </div>{/* end col-lg-4 , 카드섹션 (2)*/}

                        <div className="col-lg-4 col-sm-6" id="imgBox">
                            <div className="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                <div className="team-image">
                                    <img src="/images/team-3.jpg" alt="Team"></img>
                                </div>
                                <div className="team-content">
                                    <div className="team-social">
                                        <ul className="social">
                                            <li><a href="https://drive.google.com/file/d/1dviiiyB2YSV-WybFeVdfnCXp-9Nq1Qr1/view?usp=sharing" target="_blank"><i className="fa fa-plus"></i></a></li>
                                        </ul>
                                    </div>
                                    <h4 className="team-name"><a href="#">FINFO</a></h4>
                                    <span className="sub-title">국내 페스티벌 소개 및 추천 웹사이트
                                        <br></br>#springMVC_Security #Mysql
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </ReactWOW>
            </section>
        );
    }
}

export default Project;