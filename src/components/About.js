import React, {Component} from 'react';
import ReactWOW from 'react-wow';


class About extends Component{
    render(){
        return(
           
            <section id="about">
                <ReactWOW animation="fadeInLeftBig" duration="1.5s">
                <div className="row">
                   <div className="three columns">
                        <ReactWOW animation="swing" duration="3s" ><div className="sentense">Better do your best than regret!</div></ReactWOW>
                    </div> 
                    <div className="nine columns main-col">
                        <h2><span>ABOUT</span></h2>
            
                        <p>지나간 일에 대해 후회하기 보다 지금 내게 주어진 환경에서 할 수 있는 <span className="my-highlight">최선의 일</span>이 무엇인지 잘 찾는 편입니다. 
                            그리고 그것들을 하나씩 실천해 나감에 있어 자긍심을 갖습니다. 포토샵을 통해 퍼블리셔라는 직업을 알게 되었고 
                            고등학교 때 참여한 프로그램에서 처음으로 컴퓨터 언어를 접했습니다. 알 수 없는 언어로 컴퓨터와 소통할 수 있는 
                            코딩의 매력에 매료되었고 그 관심으로 컴퓨터 소프트웨어학과를 진학하게 되었습니다. 지금은 프런트-백엔드를 
                            폭넓게 이해할 수 있는 개발자가 되고자 합니다. 변화가 빠른 IT 분야지만 <span className="my-highlight">꾸준히 공부하는 것</span>에 목표를 두어 
                            점점 더 나은 모습으로 나아가기 위해 노력 중입니다.
                            <br></br><br></br>

                            기록하기를 좋아합니다. 외장 하드엔 날짜별로 분류된 자료들이 가득하고 생각날 때마다 일기를 쓰곤 합니다. 
                            같은 맥락으로 여행의 순간순간을 렌즈로 담아내고, 느꼈던 감정을 보정으로 표현하는 걸 좋아합니다.
                            그리고 차곡히 쌓인 보정 사진들을 한곳에 정리하고 다른 사람에게도 공유할 아카이브 페이지를 마련했습니다. 
                            항상 <span className="my-highlight">효율적인 정리 방법</span>에 대해 진지하게 고민하기 때문에 어떤 일에 대해 타인이 한눈에 파악할 수 있도록
                            배려합니다.
                            <br></br><br></br>

                            97년생 소띠에 고기, 갑각류 해산물, 마라샹궈, 인도커리, 구움과자, 밀크티 등을 좋아하나 슬프게도 날 음식은 못 먹습니다. 
                            다양한 취미 중 하나로 수영을 배우고 있고 등산에 관심이 생겨 북한산 정상에 다녀왔으며 최근에는 베이킹을 시작했습니다. 
                            &lt;월-E&gt; &lt;스틸 앨리스&gt; &lt;원더&gt; 
                            &lt;칠월 여 안생&gt; &lt;타오르는 여인의 초상&gt; 같은 영화에 마음이 동하는 편이며 
                            제일 중요한 <span className="my-highlight">Music is my Life</span>를 실천하고 있습니다! 😉
                        </p> 
            
                        <div className="row">
            
                            <div className="columns download">
                                <p>
                                    <a href="https://drive.google.com/file/d/1Tpq13A1tk7Z_uFlygkXzO_ZJXwGxVXGD/view?usp=sharing" 
                                    className="button"><i className="fa fa-download"></i>Check Resume</a>
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