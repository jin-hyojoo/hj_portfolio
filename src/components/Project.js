import React, {Component} from 'react';

class Project extends Component{
    render(){
        return(
            <section id="project" class="team-area pt-120 pb-130">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-10">
                            <div class="section-title text-center pb-30">
                                <h3 class="title">Meet The Team</h3>
                                <p class="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                            </div> 
                        </div>
                    </div> {/* end row justify */}
                    <div class="row">
                        <div class="col-lg-4-col-sm-6" id="imgBox">
                            <div class="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                <div class="team-image">
                                    <img src="/images/team-1.jpg" alt="Team"></img>
                                </div>
                                <div class="team-content">
                                    <div class="team-social">
                                        <ul class="social">
                                            <li><a href="#"><i class="lni lni-facebook-filled"></i></a></li>
                                            <li><a href="#"><i class="lni lni-twitter-original"></i></a></li>
                                            <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li>
                                            <li><a href="#"><i class="lni lni-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                    <h4 class="team-name"><a href="#">NOTE</a></h4>
                                    <span class="sub-title">Art Director</span>
                                </div>{/* end team-content */}
                            </div>{/* end teadm style-eleven */}
                        </div>{/* end col-lg-4 , 카드섹션 (1)*/}

                        <div class="col-lg-4-col-sm-6" id="imgBox">
                            <div class="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                <div class="team-image" >
                                    <img src="/images/team-2.jpg" alt="Team"></img>
                                </div>
                                <div class="team-content">
                                    <div class="team-social">
                                        <ul class="social">
                                            <li><a href="#"><i class="lni lni-facebook-filled"></i></a></li>
                                            <li><a href="#"><i class="lni lni-twitter-original"></i></a></li>
                                            <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li>
                                            <li><a href="#"><i class="lni lni-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                    <h4 class="team-name"><a href="#">수락간</a></h4>
                                    <span class="sub-title">Art Director</span>
                                </div>{/* end team-content */}
                            </div>{/* end teadm style-eleven */}
                        </div>{/* end col-lg-4 , 카드섹션 (2)*/}

                        <div class="col-lg-4 col-sm-6" id="imgBox">
                            <div class="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                <div class="team-image">
                                    <img src="/images/team-3.jpg" alt="Team"></img>
                                </div>
                                <div class="team-content">
                                    <div class="team-social">
                                        <ul class="social">
                                            <li><a href="#"><i class="lni lni-facebook-filled"></i></a></li>
                                            <li><a href="#"><i class="lni lni-twitter-original"></i></a></li>
                                            <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li>
                                            <li><a href="#"><i class="lni lni-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                    <h4 class="team-name"><a href="#">FINFO</a></h4>
                                    <span class="sub-title">Art Director</span>
                                </div>{/* end team-content */}
                            </div>{/* end teadm style-eleven */}
                        </div>{/* end col-lg-4 , 카드섹션 (3)*/}
                    </div>{/* end row */}
                </div> {/* end container */}
            </section>
        );
    }
}

export default Project;