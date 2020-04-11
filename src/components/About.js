import React, {Component} from 'react';
import ReactWOW from 'react-wow';


class About extends Component{
    render(){
        return(
           
            <section id="about">
                <ReactWOW animation="fadeInLeftBig" duration="1.5s">
                <div className="row">
                   <div className="three columns">
                        <ReactWOW animation="swing" duration="3s" ><div className="sentense">give a lot of favors!</div></ReactWOW>
                    </div> 
                    <div className="nine columns main-col">
                        <h2><span>ABOUT</span></h2>
            
                        <p>포토샵을 통해 퍼블리셔라는 직업을 알게 되었고 고등학교 때 참여한 프로그램에서 처음으로 컴퓨터 언어를 접했습니다. 
                            알 수 없는 언어로 컴퓨터와 소통할 수 있는 코딩의 매력에 매료되었고 그 관심으로 컴퓨터 소프트웨어학과를 진학하게 되었습니다. 
                            그리고 직업의 관점을 옮겨 퍼블리셔에서 프런트엔드 개발자가 되기로 결심했습니다. 현재는 IT 분야의 빠른 분야에 적응하기 위해 
                            "느리더라도 꾸준히 공부하는 것"에 목표를 두어 점점 더 나은 모습으로 나아가는 개발자가 되기 위해 노력 중입니다.
                            <br></br><br></br>

                            
                            97년생 소띠에 수영하기를 좋아합니다. "Music is my Life"라는 말처럼 음악도 정말 좋아합니다.  
                            혼자 영화를 볼 땐 생각할 주제가 있는 작품을 주로 찾아보고 제일 좋아하는 작품으로 &lt;타오르는 여인의 초상&gt;과 
                            &lt;미스슬로운&gt;, &lt;원더&gt; 등이 있습니다. 다 같이 보는 영화로는 마블 히어로물을 보는 편이고 히어로들 중 
                            화려한 마법을 쓰고 점점 성장하는 면모를 볼 수 있는 스칼렛위치를 가장 좋아합니다. 
                            
                            <br></br><br></br>그 외 여행을 다니며 순간순간의 풍경을 렌즈로 담아내고, 느꼈던 감정을 보정으로 표현하는 걸 좋아합니다.
                            기록을 소중히 여겨 외장 하드엔 날짜별로 분류된 자료들이 가득하고 생각날 때마다 일기를 쓰곤 합니다. 최근엔 차곡히 쌓인 
                            보정 사진들을 한곳에 정리하고 다른 사람에게도 공유할 겸 간단한 아카이브 페이지를 마련하기도 했습니다.  
                            불에 닿지 않은 날 음식과 버섯, 내장, 간 같은 음식은 못 먹지만 익힌 고기와 샐러드, 
                            야채 가득한 샌드위치, 달달한 디저트, 빵을 좋아하고 
                            요즘 빠진 음식은 마라샹궈와 흑당버블티입니다 ♪(^∇^*) 
                        </p>
            
                        <div className="row">
            
                            <div className="columns download">
                                <p>
                                    <a href="#" className="button"><i className="fa fa-download"></i>Download Resume</a>
                                </p>
                            </div>
                        </div>  {/* end row */}
            
                    </div>  {/* end .main-col */}
                </div>
         </ReactWOW> 
         </section>
        );
    }
}

export default About;