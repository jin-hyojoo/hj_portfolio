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
                            <li><img className="java-pic"  src="./images/skills/java_language.png" alt="java" /></li>
                            <li><img className="p-pic"  src="./images/skills/python_language.png" alt="p" /></li>
                            <li><img className="html-pic"  src="./images/skills/html_language.png" alt="html" /></li>
                            <li><img className="css-pic"  src="./images/skills/css_language.png" alt="css" /></li>
                            <li><img className="javascript-pic"  src="./images/skills/javascript_language.png" alt="javascript" /></li>
                            <li><img className="spring-pic"  src="./images/skills/spring_framwork.png" alt="spring" /></li>
                            <li><img className="react-pic"  src="./images/skills/react_library.png" alt="react" /></li>
                            <li><img className="sql-pic"  src="./images/skills/sql_language.png" alt="sql" /></li>
                            <li><img className="git-pic"  src="./images/skills/git.png" alt="git" /></li>
                            <li><img className="pho-pic"  src="./images/skills/photoshop.png" alt="photoshop" /></li>
                            <li><img className="light-pic"  src="./images/skills/Lightroom.png" alt="lightroom" /></li>
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