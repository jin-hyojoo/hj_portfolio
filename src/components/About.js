import React, {Component} from 'react';
import ReactWOW from 'react-wow';


class About extends Component{
    render(){
        return(
           
            <section id="about">
                <ReactWOW animation="bounceInUp" duration="2s">
                <div className="row">
                   <div className="three columns">
                        <ReactWOW animation="swing" ><div className="sentense">give a lot of favors!</div></ReactWOW>
                    </div> 
                    <div className="nine columns main-col">
                        <h2><span>ABOUT-ME</span></h2>
            
                        <p>97년생 소띠에 수영하기를 좋아합니다. "Music is my Life" 라는 말처럼 음악을 정말 좋아합니다.  
                            영화를 혼자 볼 때는 생각할 주제가 있는 작품을 주로 찾아보고 제일 좋아하는 작품으로 &lt;타오르는 여인의 초상&gt;과 
                            &lt;미스슬로운&gt;, &lt;원더&gt; 등이 있습니다. 다같이 보는 영화로는 마블 히어로물을 보는 편이고 히어로들 중 
                            멋진 마법기술을 쓰고 점점 성장해나가는 모습을 볼 수 있는 스칼렛위치를 가장 좋아합니다. 
                            
                            <br></br><br></br>그 외 여행을 다니며 순간순간의 풍경을 렌즈로 담아내고, 느꼈던 감정을 보정으로 표현하는 걸 좋아합니다.
                            기록을 소중하게 생각하기에 외장하드엔 날짜별로 분류된 자료들이 가득하고 일기도 생각날 때 마다 쓰곤 합니다. 최근엔 차곡히 쌓인 보정사진들을 한 곳에 정리하고 다른 사람에게도 공유 할겸 간단한 아카이브 페이지를 마련하기도 했습니다.  
                            불에 닿지 않은 날 음식과 버섯, 내장,간 같은 음식은 못먹지만 익힌 고기와 샐러드, 야채 가득한 샌드위치, 달달한 디저트, 빵을 좋아하고 
                            요즘 빠진 음식은 마라샹궈입니다 ♪(^∇^*) 마지막으로 호의를 베풂으로써 평화롭고 평온하게 살아가고 싶은 개발자입니다.    
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