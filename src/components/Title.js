import React, {Component} from 'react';
/* import Typing from 'react-typing-animation'; */
import ReactWOW from 'react-wow';

class Title extends Component{
    render(){
        return(
            <div className="row banner">

                {/* 아이콘-프로필 박스 */}
                <div className="icons-profile">
                    <p>&#x1F42E;&#127946;&#127925;&#127908;&#127916;&#128247;&#127759;&#127793;&#127830;&#127856;&#129505;</p>
                    <hr/><hr/><hr/>
                    <img className="profile-pic"  src="./images/profilepic.jpg" alt="photo" />
                </div>

                {/* 타이틀 문구 */}
                <div class="wrapper">
                    {/* <Typing speed={50}><h1 data-heading="Nyozu's Portfolio">Nyozu's Portfolio</h1></Typing> */}
                    <ReactWOW animation="fadeIn" duration="2s"><h1 data-heading="Nyozu's Portfolio">Nyozu's Portfolio</h1></ReactWOW>
                </div>

                {/* 내용 텍스트 */}
               
                <div className="banner-text">
                     <ReactWOW animation="pulse">
                     <h3> 
                         {/* I'm not a professional <span>Front-EndDeveloper </span>
                         &nbsp;But, I have full of desire to apply the <span>new technology </span> <br></br>
                         &nbsp; So I want to believe that  will become a <span>good Developer </span> And If possible, I would like to know about the 
                         <span> Back-EndDeveloper</span> */}

                         I'm <span>&nbsp;Front-EndDeveloper&nbsp;</span>
                         &nbsp;But, i have full of desire to apply a <span>&nbsp;new technology&nbsp;</span> <br></br>
                         So if possible, I would like to know about the <span>&nbsp;Back-EndDeveloper&nbsp;</span>
                    </h3>
                    </ReactWOW>

                     <hr/><hr/>
                     <ul className="social">
                        <li><a href="https://www.instagram.com/j.nyozu" target="_blank"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://github.com/jin-hyojoo" target="_blank"><i className="fa fa-github"></i></a></li>
                        {/* <li><a href="https://nyojzufavthing.tistory.com/" target="_blank"><i className="fa fa-bookmark"></i></a></li> */}
                        <li><a href="https://nyozu.creatorlink.net/" target="_blank"><i className="fa fa-camera-retro"></i></a></li>
                     </ul>
                </div>
                
                

                {/* 스크롤버튼 */}
                <div className="scrollBtn">
                    <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>
                </div>


            </div>
        );
    }
}

export default Title;