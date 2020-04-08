import React, {Component} from 'react';
import ReactWOW from 'react-wow';

class Skill extends Component{
    render(){
        return(
        <section id="skill">
            <ReactWOW animation="bounceInUp" duration="2s">
            <div className="row skill">
                <h3><span>Skills</span></h3>
                <div className="three columns header-col"></div>
                <div className="nine columns main-col">
                    <div className="skillbox_container">
                        <ul className="skillimg">
                            <li><img className="c-pic"  src="./images/c_language.png" alt="c" /></li>
                            <li><img className="java-pic"  src="./images/java_language.png" alt="java" /></li>
                            <li><img className="html-pic"  src="./images/html_language.png" alt="html" /></li>
                            <li><img className="css-pic"  src="./images/css_language.png" alt="css" /></li>
                            <li><img className="javascript-pic"  src="./images/javascript_language.png" alt="javascript" /></li>
                            <li><img className="spring-pic"  src="./images/spring_framwork.png" alt="spring" /></li>
                            <li><img className="react-pic"  src="./images/react_library.png" alt="react" /></li>
                            <li><img className="sql-pic"  src="./images/sql_language.png" alt="sql" /></li>
                            <li><img className="git-pic"  src="./images/git.png" alt="git" /></li>
                            <li><img className="pho-pic"  src="./images/photoshop.png" alt="photoshop" /></li>
                            <li><img className="light-pic"  src="./images/Lightroom.png" alt="lightroom" /></li>
                        </ul>
                    </div>
               </div> {/* main-col end */}
         </div>{/* End skills */}
         </ReactWOW>
      </section> 
   
        );
    }
}

export default Skill;