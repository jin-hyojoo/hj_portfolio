import React, {Component} from 'react';
import ReactWOW from 'react-wow';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import '../css/accordion.css';
import mediumZoom from 'medium-zoom'


//시간되면 아코디언 코드 반복부분 없애고 map이나 props으로 데이터만 넣는거 찾아보자
class Experience extends Component{
    componentDidMount() {
        const images1 = document.querySelectorAll('.pj-bookfind-img');
        const images2 = document.querySelectorAll('.finfo-img');
        mediumZoom(images1);
        mediumZoom(images2);        
    }
    render(){
        return(
            <section id="experience">
                <ReactWOW animation="bounceInUp" duration="2s">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-10">
                            <div class="section-title text-center pb-30">
                                <h3 class="title"><span>EXPERIENCE</span></h3>
                                <p class="text">쉽게 사용 가능한 웹사이트를 목표로 제 이름&nbsp; 
                                <span class="my-highlight">周(두루,주)</span> 의 의미처럼<br></br>
                                <span class="my-highlight">디자인 - 프론트 - 백엔드 기능 개발</span>&nbsp;에
                                두루두루 참여하였습니다<br></br>
                                ＊&#x1F331; ➡ 프로젝트 내용이 첨부되어 있으니 살펴봐주세요 !</p>
                            </div> 
                        </div>
                    </div> {/* end row justify */}
                    <p></p>
                    <Accordion allowZeroExpanded>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <b>2021.06</b>&emsp;&emsp;&emsp;&emsp;&emsp;AWS Certified Developer - Associate 자격증 취득
                                </AccordionItemButton>
                            </AccordionItemHeading>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <b>2021.01-02</b>&emsp;&emsp;&emsp;&nbsp;신세계 이마트 설 명절 TF
                                </AccordionItemButton>
                            </AccordionItemHeading>
                        </AccordionItem>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <b>2020.11-12</b>&emsp;&emsp;&emsp;&nbsp;&#x1F331; 멀티캠퍼스 2020년 청년취업아카데미 교육 이수

                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div class="info-20201112">
                                    <p>파이썬 기반 머신러닝 응용 웹서비스에 대한 교육을 출석우수로 수료하였습니다</p>
                                    
                                    <p><span class="my-highlight"> 학습기술 </span><br></br>  
                                    Mysql&emsp;Python&emsp;Flask<br></br>
                                    Data Science ( crawling&emsp;API crawling&emsp;Selenium&emsp;Numpy  
                                    &emsp;Pandas&emsp;Matplotlib&emsp;지도/비지도학습 )</p>                                    
                                    
                                    <div class="pj-bookfind">                                 
                                        <p><span class="my-highlight">프로젝트</span><br></br>
                                        &lt;희망도서 빠른찾기&gt;는 희망 도서 검색 시 현재 위치를 기준으로 한 대여 가능 도서관 정보를 
                                        빠르게 탐색, 시각화된 정보로 제공하는 웹사이트입니다. 다양한 오픈 API 도서·도서관 데이터에 
                                        대해 분석 및 전처리 과정을 거치고 도서관의 위치·정보를 카카오 맵 API로 제공하며
                                        반경 2.5km 이내의 도서관을 사용자에게 연결해 줍니다</p>
                                        <img class="pj-bookfind-img-logo" src="./images/bookfind/bookfind_project.jpg" alt="project_bookfind"></img>
                                     </div> 

                                     <p><span class="my-highlight">사용기술</span><br></br>
                                     Python&emsp;API crawling&emsp;데이터 분석 및 전처리&emsp;Flask&emsp;카카오맵 API<br></br><br></br></p>   
                                     
                                     <p><span class="my-highlight"> 개발기간 / 참여인원 </span><br></br>  
                                    2020년 12월 11일 ~ 24일, 2주 / 4명<br></br><br></br></p>
                                     
                                     <p><span class="my-highlight">담당역할</span><br></br>
                                     백엔드 개발과 팀장으로서의 PPT 제작 · 프로젝트 발표를 맡았습니다. 프로젝트에 필요한 
                                     도서관 관련 오픈 API를 찾아 데이터를 크롤링 했는데
                                     크롤링 된 데이터는 프로젝트에서 어떻게 사용할지 분석했고 그 결과에 따른 전처리를 진행했습니다. 
                                     그리고 전처리된 &lt;전국 도서관 정보 데이터&gt; 리스트와 도서 정보가 있는 다른 팀원의 
                                     &lt;국가 자료 종합 목록 데이터&gt;를 이름 기준으로 매칭 시켜 웹에 출력하였습니다. 
                                     <br></br><br></br>
                                     그 외,
                                     다른 팀원의 API 인증키 오류 발생을 새로운 API로 대체해 주었고 크롤링 작업을 대신 진행해 주는 등
                                     여러 팀원이 프로젝트 완성에 집중할 수 있도록 도와주었습니다. 도움받은 팀원들은 데이터 매칭을 "이름"보다 정확한
                                     "폰 번호" 기준으로 제시하고 페이징 작업을 진행해 주는 등, 서로 도움을 주고받는
                                     훈훈한 분위기 속에서 프로젝트를 마무리하였습니다.<br></br><br></br></p>
                                    
                                    <p><span class="my-highlight">기능구현</span><br></br>
                                        <img class="pj-bookfind-img" src="./images/bookfind/ex_1.png"></img><br></br>
                                        API 크롤링 &#x26A1; url 리퀘스트를 통해 받아온  <span class="understyle">도서관 API 데이터</span> 
                                        &nbsp;json.loads를 통해 <span class="understyle">JSON 디코딩 진행</span><br></br>
                                         = JSON문자열을 파이썬 객체 (딕셔너리,리스트 등)로 변경해 사용하기 위함
                                        <br></br><br></br>
                                        <img class="pj-bookfind-img" src="./images/bookfind/ex_2.png"></img><br></br>
                                        API 크롤링 &#x26A1; 앞에서 리턴받은 데이터 객체를 이용해 데이터를 잘 불러왔는지 확인 후 불러오기<br></br>
                                        = <span class="understyle">불러오기 성공 했다면</span>&nbsp;데이터에 접근해 프로젝트에 필요한 형태로 데이터를 정제하는 전처리 과정 진행
                                        <br></br><br></br>
                                        <img class="pj-bookfind-img" src="./images/bookfind/ex_3.png"></img><br></br>
                                        데이터 전처리 &#x26A1;<br></br>
                                        gungu컬럼 중 도봉구 지역만 '서울특별시 도봉구'와 같이 sido정보가 포함돼서 정제<br></br>
                                        홈페이지 컬럼 값에 문자열 '-' 값이 들어가 있어 ＇ ＇ 으로 정제<br></br>
                                        OP_TIME컬럼 시간을 현재 저장하려는 컬럼 기준에 맞게 변경 (split)<br></br>
                                        split값에서 평일시간 값 끝에 콤마(,)가 붙어서 한 번 더 정제 (replace)<br></br>
                                        도서관 개방시간 관련 데이터 정제
                                        <br></br><br></br>
                                        <img class="pj-bookfind-img" src="./images/bookfind/ex_4.png"></img><br></br>
                                        데이터 전처리 &#x26A1; 데이터 보충을 위해 추가로 "서울특별시 공공 도서관 현황정보" API를 찾아<br></br> 
                                        크롤링 및 전처리를 진행했고 앞에서 정제한 모든 데이터들을 csv / json파일로 저장 
                                        <br></br><br></br>
                                        <img class="pj-bookfind-img" src="./images/bookfind/ex_5.png"></img><br></br>
                                        데이터 매칭 &#x26A1; "각 도서관의 소장 도서" 데이터를 "전국 도서관 정보" 데이터의
                                        도서관명(libName) 컬럼 기준으로<br></br>매칭시킴으로써 사용자가 특정 도서를 검색했을 때 해당 도서를 
                                        보유한 도서관 정보까지 한눈에 확인할 수 있도록 함                                        
                                        <br></br><br></br>
                                        <img class="pj-bookfind-img" src="./images/bookfind/ex_6.png"></img><br></br>
                                        데이터 출력 &#x26A1; 사용자의 검색 결과를 Jinja2 템플릿을 통해 html 파일에서 출력
                                        <br></br><br></br>
                                    </p>                         


                                    <p><span class="my-highlight">시연영상</span><br></br>
                                        <video class="bookfind-source" src="./images/bookfind/bookfind_video.mp4" controls ></video>
                                        <br></br><br></br>
                                        · 현재위치 기준은 &lt;서울 시청&gt;<br></br>
                                        · 여러 API 호출로 검색시간 최소 20초~1분 사이<br></br>
                                        · 일정 거리 반경에 있는 가까운 도서관을 맵에 표시<br></br>
                                        · 5-6개 이상의 검색결과는 더보기 페이징을 통해 확인 <br></br>
                                    <br></br><br></br></p>    

                                    <p> * 프로젝트 더 살펴보기<br></br><br></br>
                                        <a href="https://nyozu.notion.site/657ee86c38e94eebbacec9191ca2fe3b" target="_blank">
                                        <img class="project-more-logo" src="./images/bookfind/Notion_app_logo.png" alt="notionlogo"></img></a>
                                    <a href="https://github.com/jin-hyojoo/2020_youth_flaskproject" target="_blank">&emsp;
                                        <img class="project-more-logo" src="./images/bookfind/github-logo.png" alt="githublogo"></img></a></p>    
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <b>2020.11</b>&emsp;&emsp;&emsp;&emsp;&emsp;정보처리기사 자격증 취득
                                </AccordionItemButton>
                            </AccordionItemHeading>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <b>2020.02</b>&emsp;&emsp;&emsp;&emsp;&emsp;&#x1F331; 서일대학교 소프트웨어공학과 학사심화과정 졸업
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div class="info-20202">
                                    <p>1학기 &lt;고급 웹 실무&gt; 과목에서 진행한 프로젝트입니다<br></br><br></br></p>
                            
                                    <p><span class="my-highlight">프로젝트</span><br></br>
                                        &lt;F.info&gt;는 Festival Info의 약자입니다. 국내 축제와 관련된 정보를 
                                        사용자 본인이 선호하는 장르에 따라<br></br>우선적으로 확인할 수 있으며
                                        다녀온 축제에 대해 리뷰를 남길 수 있습니다.<br></br>
                                        관리자는 관리자 페이지를 통해 회원 상태 관리 · 축제 상태 관리 및 CRUD를 이용할 수 있습니다.<br></br>
                                        <img class="finfo-images" src="./images/finfo/finfo_logo.png" alt="project_finfo"></img></p>
                                        

                                    <p><span class="my-highlight">개발환경</span><br></br>
                                     Window10 64bit&emsp;Mysql&emsp;Eclipse&emsp;Java&emsp;SpringMVC<br></br>
                                     Jsp&emsp;Css&emsp;Javascript&emsp;Mybatis&emsp;REST&emsp;Apache
                                    <br></br><br></br></p>  

                                    <p><span class="my-highlight"> 개발기간 / 참여인원 </span><br></br>  
                                    2019년 5월 14일 ~ 6월 19일, 5주 / 5명<br></br><br></br></p> 

                                    <p><span class="my-highlight">담당역할</span><br></br>
                                       클라이언트 단에서는 회원가입 백엔드와 로그인/회원가입 · 메인 페이지의 프런트엔드를 맡았고<br></br>
                                       관리자 단에서는 풀스택. 즉, 전체 개발을 맡아 프로젝트를 진행했습니다.<br></br><br></br></p>

                                    <p><span class="my-highlight">기능구현</span><br></br><br></br>
                                        <img class="finfo-img" src="./images/finfo/finfo-join1.gif" alt="finfo-join1"></img><br></br>
                                        <img class="finfo-img" src="./images/finfo/finfo-join2.PNG" alt="finfo-join2"></img><br></br>
                                        &lt;클라이언트&gt; 회원가입 백엔드 &#x26A1;<br></br>
                                        회원가입에 요구되는 정보(이메일, 비밀번호, 이름, 선호장르) 입력 폼이 나타나며<br></br>
                                        비밀번호는 <span class="understyle">Bcrypt의 해시 알고리즘</span>을 통해 암호화되어 DB에 저장<br></br>
                                        폼 데이터는 모두 기입해야 하며 가입 성공 시 환영 알림창과 함께 로그인 페이지로 이동
                                        <br></br><br></br><br></br>
                                        <img class="finfo-img" src="./images/finfo/finfo-user-search.gif" alt="finfo-user-search"></img><br></br>
                                        <img class="finfo-img" src="./images/finfo/finfo-festival-search.gif" at="finfo-festival-search"></img><br></br>
                                        &lt;관리자&gt; 회원 · 축제에 대한 검색 기능 &#x26A1;<br></br> 
                                        검색 구분 값으로 <span class="understyle">Users</span>의 경우 이름, 이메일, 이름 or 이메일<br></br>
                                        <span class="understyle">Festival</span>의 경우 축제 명, 장르, 축제 명 or 장르를 선택해 검색 가능
                                        <br></br><br></br><br></br>
                                        <img class="finfo-img" src="./images/finfo/finfo-user-state.gif" alt="finfo-user-state"></img><br></br>
                                        <img class="finfo-img" src="./images/finfo/finfo-festival-state.png" alt="finfo-festival-state"></img><br></br>
                                        &lt;관리자&gt; 회원 · 축제 상태 변경 &#x26A1;<br></br> 
                                        DB에서 유저 상태 값, 축제 상태 값을 불러옴. 이때 권한 부여 항목 변경 후 수정 버튼 클릭 시<br></br> 
                                        버튼 색이 변경될 뿐만 아니라 변경된 상태 값이 DB에 반영됨. 즉, 리스트 화면을 통해<br></br>
                                        회원 상태 및 축제의 예정-진행-마감 상태 여부를 바로 수정<br></br>
                                        gif 예시 ➡ 일반회원 계정을 관리자 상태로 변경함으로써 관리자 페이지에 접근할 수 있게 함
                                        <br></br><br></br><br></br>
                                        <img class="finfo-img" src="./images/finfo/finfo-festival-crud.gif" alt="finfo-crud"></img><br></br>
                                        &lt;관리자&gt; 축제 CRUD &#x26A1;<br></br> 
                                        관리자가 새로운 축제 등록 및 기존 축제에 대한 조회 · 수정 · 삭제할 수 있게끔 기능 구현
                                        <br></br><br></br><br></br>
                                        <img class="finfo-img" src="./images/finfo/finfo-festival-ui.gif" alt="finfo-ui"></img><br></br>
                                        그 外 &#x26A1;<br></br> 
                                        마이크-CD 아이콘을 글씨처럼 이용해 프로젝트 의미가 담긴 로고 제작<br></br>
                                        부트스트랩을 활용한 메인-회원가입-로그인 페이지 UI
                                        <br></br><br></br><br></br></p>  
                                    <p><span class="my-highlight">프로젝트 더 살펴보기</span><br></br>
                                        * 하단 이미지 클릭으로 PPT를 확인해보세요 !<br></br>
                                        <a href="https://drive.google.com/file/d/19cdSwmCpZJ8fZQxT09W2ARuVWZSmJXvo/view?usp=sharing" target="_blank">
                                        <img class="finfo-source" src="./images/finfo/finfo-ppt.png" alt="finfo-ppt"></img></a></p> 
                                    <p>* 프로젝트 UML 다이어그램<br></br>
                                        <img class="finfo-img" src="./images/finfo/finfo-uml.jpg" alt="finfo-uml"></img><br></br></p>      

                                    <p>* 한눈에 보기<br></br>
                                        <img class="finfo-img" src="./images/finfo/finfo_jhj-1.jpg" alt="Single-photo summary 1"></img><br></br>
                                        <img class="finfo-img" src="./images/finfo/finfo_jhj-2.jpg" alt="Single-photo summary 2"></img><br></br>
                                        <img class="finfo-img" src="./images/finfo/finfo_jhj-3.jpg" alt="Single-photo summary 3"></img>
                                        <br></br><br></br></p>                         
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <b>2019.12</b>&emsp;&emsp;&emsp;&emsp;&emsp;전자정부 표준 프레임워크 교육 이수
                                </AccordionItemButton>
                            </AccordionItemHeading>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <b>2019.03</b>&emsp;&emsp;&emsp;&emsp;&emsp;서일대학교 소프트웨어공학과 학사심화과정 입학
                                </AccordionItemButton>
                            </AccordionItemHeading>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <b>2019.02</b>&emsp;&emsp;&emsp;&emsp;&emsp;&#x1F331; 서일대학교 소프트웨어공학과 졸업      
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div class="info-201902">
                                        <p>졸업작품 &lt;P · TAM&gt;의 팀장이 되어 전체 프로젝트 프로세스를 관리했고<br></br>
                                            팀원들이 준비과정 발표와 질문을 골고루 할 수 있도록 도왔습니다<br></br>
                                            그 外 PPT, 소개 영상을 제작해 학과 교수님, 후배 앞에서 최종 발표를 진행했습니다
                                            <br></br><br></br>
                                            졸작 진행 당시 현장실습과 취성패 과정을 겸하고 있었기 때문에
                                            앱 개발의 디자인 부분과 코드 리뷰에만 참여하게 됐습니다. 게다가 
                                            기초지식 없이 처음 사용해보는 안드로이드 스튜디오에 애를 먹었으나 주어진 기간에 원만히 
                                            끝마칠 수 있도록 최선을 다했기 때문에 후회로 남지 않는 프로젝트입니다.<br></br><br></br></p>
                                        <p><span class="my-highlight"> 프로젝트 </span><br></br>
                                        P · TAM은 PC-스마트폰의 로컬 네트워크 연결을 통해 스마트폰 디스플레이를 노트북의 터치패드처럼 사용할 수 있고 
                                            PC에서 흔히 사용하는 포토샵, PPT 발표, 게임처럼 다양한 유틸리티를 
                                            사용자의 편의에 따라 유용하게 활용할 수 있는 애플리케이션입니다. 
                                            키보드 자판 불러오기, 드래그, 탭을 통한 클릭 기능, 두 손가락으로 PC 화면 스크롤 기능과 같은 
                                            다양한 터치패드 동작을 수행할 수 있습니다.<br></br><br></br>
                                            <img class="ptam-images" src="./images/ptam/ptam_phone.png" alr="ptam_phone"></img>&nbsp;
                                        </p>
                                        <p>* 하단 이미지 클릭으로 PPT를 확인해보세요 !<br></br>
                                            <a href="https://drive.google.com/file/d/10OAOEINCs-pQK_sPK9puy39UyQQ2_CPR/view?usp=sharing"target="_blank">
                                            <img class="ptam-source" src="./images/ptam/ptam_ppt.jpg"></img></a></p>                                        
                                        <p>* 프로젝트 소개 영상<br></br>
                                        <video class="ptam-source" src="./images/ptam/ptam_final.mp4" controls ></video></p>
                                        <p><span class="my-highlight"> 개발환경 </span><br></br>
                                        Windows10&emsp;Android Studio&emsp;Eclipse&emsp;Java<br></br><br></br></p>
                                        <p><span class="my-highlight"> 시스템 구성 </span><br></br>
                                        <img class="ptam-source" src="./images/ptam/ptam_system.png" alr="ptam_system"></img></p>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <b>2018.02-09</b>&emsp;&emsp;&emsp;&nbsp;&#x1F331; 취성패 자바 프레임워크 개발자 양성과정 교육 이수
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div class="info-20180209">
                                        <p>자바 프레임워크 개발자 양성과정 교육을 출석률 95%로 수료했고<br></br>
                                        웹 애플리케이션 개발을 통해 자바(JAVA) 프레임워크 개발자로서의 기반을 익혔습니다</p>
                                        <p><span class="my-highlight"> 학습기술 </span><br></br>  
                                        Oracle&emsp;SQL Programming&emsp;Mybatis&emsp;Java<br></br>
                                        Servlet&emsp;Jsp&emsp;Spring Framework&emsp;JavaScript&emsp;Ajax</p>
                                    <p><span class="my-highlight"> 세미·파이널 프로젝트 </span><br></br>
                                    &#x1F4CC;해당 프로젝트 내용이 담긴 노션으로 이동하실 수 있습니다!</p>

                                    <div class="container">
                                        <div class="project-box"/* class="row" */>
                                            <div class="col-lg-4-col-sm-6" id="imgBox">
                                                <div class="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                                    <div class="team-image">
                                                        <img src="./images/team-1.jpg" alt="Team"></img>
                                                    </div>
                                                    <div class="team-content">
                                                        <div class="team-social">
                                                            <ul class="social">
                                                                <li><a href= "https://nyozu.notion.site/memoG-55be9a17a815453794a0096b8d4138f1" target="_blank"><i class="fa fa-plus"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h4 class="team-name"><a href="#">memoG</a></h4>
                                                        <span class="sub-title">메모장 기능 기반 웹사이트
                                                            <br></br>Java&emsp;Oracle&emsp;Jsp&emsp;Css&emsp;Js
                                                        </span>
                                                    </div>{/* end team-content */}
                                                </div>{/* end teadm style-eleven */}
                                            </div>{/* end col-lg-4 , 카드섹션 (1)*/}

                                            <div class="col-lg-4-col-sm-6" id="imgBox">
                                                <div class="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                                    <div class="team-image" >
                                                        <img src="./images/team-2.jpg" alt="Team"></img>
                                                    </div>
                                                    <div class="team-content">
                                                        <div class="team-social">
                                                            <ul class="social">
                                                                <li><a href="https://nyozu.notion.site/b588238bf85640b4ba1ff19a2c2abe79" target="_blank"><i class="fa fa-plus"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h4 class="team-name"><a href="#">수락간</a></h4>
                                                        <span class="sub-title">커스텀 가능한 도시락 주문 웹사이트
                                                            <br></br>Spring&emsp;MVC&emsp;REST API
                                                        </span>
                                                    </div>{/* end team-content */}
                                                </div>{/* end teadm style-eleven */}
                                            </div>{/* end col-lg-4 , 카드섹션 (2)*/}
                                        </div>
                                    </div> 
                                </div><br></br><br></br>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <b>2018.07-08</b>&emsp;&emsp;&emsp;&nbsp;현장실습 (주)메타소프트
                                </AccordionItemButton>
                            </AccordionItemHeading>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <b>2017.02-09</b>&emsp;&emsp;&emsp;&nbsp;&#x1F331; 서일대학교 NCS지원센터 근로장학생
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div class="info-20170209">
                                    <p>교내 NCS 센터에서 청결유지, 방문 손님 응대, 비품관리를 했으며 엑셀과 PPT를 
                                        활용해 문서 업무를 진행했습니다. NCS 센터답게 각 학과별로 NCS가 잘 적용되고 있는지에 대한 
                                        &lt;보고서 작성 가이드&gt; 제작을 도왔고 학과에 배포하였으며 배포된 보고서를 다시 취합해 
                                        정리하였습니다. 그 外 포토샵으로 행사 진행에 필요한 현수막, 포스터, 안내 책자를 제작했습니다.</p>
                                    <p><span class="my-highlight"> 디자인 작업 </span><br></br>
                                        <img class="ncs-images" src="./images/ncs/ncs_banner.jpg" alr="ncs_banner"></img>&nbsp;
                                        <img class="ncs-images" src="./images/ncs/ncs_book_cover.jpg" alt="ncs_bool_cover"></img>&nbsp;
                                        <img class="ncs-images" src="./images/ncs/ncs_background_paper.png" alt="ncs_paper"></img>&nbsp;
                                        <img class="ncs-images" src="./images/ncs/pamphlet_back.jpg" alt="ncs_pamphlet"></img>&nbsp;
                                        <img class="ncs-images" src="./images/ncs/ncs_pamphlet_cover.jpg" alt="ncs_pamphlet_cover"></img>&nbsp;
                                        <img class="ncs-images" src="./images/ncs/ncs_pamphlet_cover2.jpg" alt="ncs_pamphlet_cover2"></img>
                                    </p><br></br>  
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <b>2016.05-12</b>&emsp;&emsp;&emsp;&nbsp;&#x1F331; 서일대학교 동아리 &lt;다섯손가락&gt;
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div class="info-20160512">
                                    <p>두 개의 프로젝트를 교수님 한 분, 선배 5분, 동기 1명과 진행한 동아리 활동입니다.
                                        하스스톤 카드게임에 화학을 접목시킨 기능성 게임 프로젝트에서 기획·디자인 수정에 참여했고
                                         &lt;16년 추계 한국 게임학회 총회 및 학술 발표대회&gt;에서 동상을 수상했습니다.

                                        리얼펫 모바일 게임 프로젝트 역시 전체 기획·디자인에 참여하였습니다. 유기동물을 구제하는 방향보다
                                        근본적인 발생 원인 해결을 목표로 반려동물과 함께 하는 건 신중해야 한다는 경각심을 일깨워주는 기능성 게임입니다. 
                                        <br></br><br></br>
                                        프로젝트를 성공적으로 이끌어 가기 위해 회의, 대화, 문서를 작성하다 보니 개발-디자인-기획 분야 등
                                        여러 팀원들과의 원활한 의사소통에 대해 많은 생각을 하게 됐습니다. 다른 시각, 여러 견해가 모인 의견 공유는 
                                        좋은 프로젝트를 완성시킨다는 깨달음을 얻게 되었고 대학 후 바로 참여한 동아리 활동이라 개인적으로 뜻깊습니다.
                                    </p>
                                    <p><span class="my-highlight"> 기획 및 디자인 작업 </span><br></br><br></br>
                                        <img class="ncs-images" src="./images/fivefingers/realpet_design.jpg" alt="realpet_dog_design"></img>&nbsp;
                                        <img class="ncs-images" src="./images/fivefingers/realpet_gps_form1.jpg" alr="realpet_form1"></img>&nbsp;
                                        <img class="ncs-images" src="./images/fivefingers/realpet_gps_form2.jpg" alt="realpet_form2"></img>&nbsp;
                                        <img class="ncs-images" src="./images/fivefingers/realpet_gps_form3.jpg" alt="realpet_form3"></img>&nbsp;
                                        <br></br>&lt; 캐릭터 디자인 · 리얼펫 기획 - 2016 위치기반 앱/웹 아이디어 공모전 참가신청서 &gt;
                                    </p><br></br>  
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <b>2016.03</b>&emsp;&emsp;&emsp;&emsp;&emsp;서일대학교 컴퓨터소프트웨어과 입학
                                </AccordionItemButton>
                            </AccordionItemHeading>
                        </AccordionItem>                       
                    </Accordion>                                   
                </div> 
                </ReactWOW>
            </section>
        );
    }
}

export default Experience;
