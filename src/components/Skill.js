import React, {Component} from 'react';

class Skill extends Component{
    render(){
        return(
        <section id="skill">
            <div className="row skill">

                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>
   
                <div className="nine columns main-col">
   
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt.
                    </p>
   
                   <div className="bars">
                        <ul className="skills">
                            <li><span className="bar-expand photoshop"></span><em>Photoshop</em></li>
                            <li><span className="bar-expand illustrator"></span><em>Illustrator</em></li>
                            <li><span className="bar-expand wordpress"></span><em>Wordpress</em></li>
                            <li><span className="bar-expand css"></span><em>CSS</em></li>
                            <li><span className="bar-expand html5"></span><em>HTML5</em></li>
                            <li><span className="bar-expand jquery"></span><em>jQuery</em></li>
                        </ul>
                   </div> {/* end skill-bars */}
               </div> {/* main-col end */}
         </div>{/* End skills */}
      </section> 
   
        );
    }
}

export default Skill;