import React, {Component} from 'react';

class About extends Component{
    render(){
        return(
            <section id="about">

                <div className="row">
                   <div className="three columns">
                        <div className="sentense">give a lot of favors</div>
                    </div> 
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
            
                        <p>수영하기를 좋아하는 프론트엔드 개발자이지만 디자인에도 관심이 많다 어쩌구저쩌구 
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                        </p>
            
                        <div className="row">
                            <div className="columns contact-details">
            
                                <h2>Contact Details</h2>
                                <p className="address">
                                        <span>진효주 Jin HyooJoo</span><br/>
                                        <span>Dongdaemoon-Gu, Seoul,  &#x1F1F0;&#x1F1F7;</span><br/>
                                        <span>(+82)  010 - 5507 - 7996</span><br/>
                                        <span>hyojoo_97@naver.com</span>
                                </p>
                            </div>
            
                            <div className="columns download">
                                <p>
                                    <a href="#" className="button"><i className="fa fa-download"></i>Download Resume</a>
                                </p>
                            </div>
                        </div>  {/* end row */}
            
                    </div>  {/* end .main-col */}
                </div>
         </section> /* About Section End */
        );
    }
}

export default About;