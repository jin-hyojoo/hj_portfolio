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
            
                        <p>지나간 일에 대해 후회하기 보다 지금 내게 주어진 환경에서 할 수 있는 "최선의 일"이 무엇인지 잘 찾는 편입니다. 
                            그리고 그것들을 하나씩 실천해 나감에 있어 자긍심을 갖습니다. 포토샵을 통해 퍼블리셔라는 직업을 알게 되었고 
                            고등학교 때 참여한 프로그램에서 처음으로 컴퓨터 언어를 접했습니다. 알 수 없는 언어로 컴퓨터와 소통할 수 있는 
                            코딩의 매력에 매료되었고 그 관심으로 컴퓨터 소프트웨어학과를 진학하게 되었습니다. 지금은 프런트-백엔드를 
                            두루두루 이해할 수 있는 개발자가 되고자 합니다. 변화가 빠른 IT 분야지만 "꾸준히 공부하는 것"에 목표를 두어 
                            점점 더 나은 모습으로 나아가기 위해 노력 중입니다.
                            <br></br><br></br>

                            평소에 기록하기를 좋아합니다. 외장 하드엔 날짜별로 분류된 자료들이 가득하고 생각날 때마다 일기를 쓰곤 합니다. 
                            같은 맥락으로 여행의 순간순간을 렌즈로 담아내고, 느꼈던 감정을 보정으로 표현하는 걸 좋아합니다.
                            그리고 차곡히 쌓인 보정 사진들을 한곳에 정리하고 다른 사람에게도 공유할 아카이브 페이지를 마련했습니다. 
                            항상 효율적 정리 방법에 대해 진지하게 고민하기 때문에 어떤 일에 대해 타인이 볼 때도 한눈에 파악할 수 있도록 
                            심혈을 기울입니다.
                            <br></br><br></br>

                            97년생 소띠에 고기, 샌드위치, 갑각류 해산물, 빵, 마라샹궈, 밀크티 등을 좋아하나 슬프게도 날 음식은 못먹습니다. 수영을 배우고 있고 등산에 관심이 생겨
                            북한산 정상도 다녀왔습니다. 영화를 볼 땐 생각할 주제가 있는 작품을 찾아봅니다. 손꼽는 작품이 있다면  &lt;칠월여안생&gt;과 
                            &lt;원더&gt;,  &lt;타오르는 여인의 초상&gt; 등이 있습니다. 마블 히어로물에서는 화려한 마법을 쓰고 점점 성장하는 면모를 볼 수 있는 
                            스칼렛위치를 가장 좋아합니다. 그리고 제일 중요한 "Music is my Life"를 실천하고 있습니다! 😉
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