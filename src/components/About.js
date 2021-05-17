import React,{useEffect} from 'react'
import Mypic from './mysecpic.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        Aos.init({
            offset:300,
            duration :900,
            easing:"ease-in-out"
      });
       
    }, []);

    const [header] = React.useState({
            subheader:"About Me",
            text:"3 Star Coder at codechef and enthusiasm in learning new technology ",
    });
    return (
        <div id="ABOUT"className="About-container">

        
        <div data-aos="zoom-in" className="About">
            <div className="common">
                        <h1 className="mainHeader">{header.subheader}</h1>
                        <p className="maincontent">{header.text}</p>
                        <div className="linered"></div> 
            </div>
            <div className="row">
                <div className="col-6-2">
                    <div data-aos="fade" className="about_img">
                        <img src={Mypic} alt="man" />
                    </div>
                </div>
                <div className="col-6-1">
                    <div className="about_info">
                        <h1>Hi There</h1> 
                        <div className="about_info-p1">
                        I'm Abhishek Jain from Etawah, UttarPradesh. I am currently persuing my  Btech. Degree from an Electronics and TeleCommunication Engineer at Shri Govindram Seksaria Institute Of Technology and Science(SGSITS), Indore. I have good hand in Html, CSS, Bootstrap and also have decent programming skills. I know programming in many different languages such as Python, C, Javascript. I have the projects related to frontend as well as backend and have the experience with Version control system(Git).
                        </div>
                        <div id="SKILL"  className="about_info-p1">
                        

I'm currently in third year of Btech. I am good in academics (8.5 CGPA). I'm a part of <b>Codefoster club</b> and <b>rEcursion codin club</b> of our college. I've secured 93% in in 12th and 9.8 CGPA  in my Higher Secondary and High School Board examination respectively.Apart from this i am interested in learning new Technology.and practice data structure and algorithm in many plateforms like GFG,Leetcodeand also do  competetive programming in CodeChef & codeforses 
                        </div>          
                    </div>
                    
                </div>
            </div>
        </div>
        <div   className="skill">
            
            <div className="row">
                <div data-aos="flip-left" className="col-6-2 Imexpert">
                    <h3>I,M EXPERT ON</h3>
                    <h1>Let,s Work Together</h1>
                    <p>I am interested in web development as well as in software development</p>
                    <div className="header_button">
                        <a className="btn btn-outline" href="#"> Hire Me
                        </a>
                    </div>
                </div>
                <div data-aos="flip-left" className="col-6-1 Imexpert">
                     <li>HTML<span className="bars"><span class="html"></span></span><span className="pecent">85%</span></li>
                     <li>CSS<span className="bars"><span class="css"></span></span><span>87%</span></li>
                     <li>JAVASCRIPT<span className="bars"><span class="javascript"></span></span><span>79%</span></li>
                     <li>BOOTSTRAP<span className="bars"><span class="bootstrape"></span></span><span>82%</span></li>
                     <li>REACT.JS<span className="bars"><span class="react-js"></span></span><span>65%</span></li>
                </div>
            </div>

    
        </div>
        </div>

        
    )
}

export default About
