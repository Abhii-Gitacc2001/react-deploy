import React,{useEffect} from 'react'
import { FaInstagram,FaLinkedinIn,FaGithub} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Mypic from './sonagir.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect'
const Banner = () => {
  useEffect(() => {
      Aos.init({
          offset:300,
          duration :1000,
    });
     
  }, []);
    return (
        <header className="header">
                <div className="row">
                    <div className="col-6-1">
                           <div className="header_content">

                                   <ul className=" header_ul">
                                       <li>
                                          <a target="_blank" href="mailTo:jainabhishek4503@gmail.com"><IoIosMail/></a> 
                                       </li>
                                       <li>
                                         <a target="_blank" href="https://www.instagram.com/jainabhishek_1234"><FaInstagram/></a>  
                                       </li>
                                       <li>
                                          <a target="_blank" href="https://www.linkedin.com/in/abhishek-jain-0575ab1a4"><FaLinkedinIn/></a>  
                                       </li>
                                       <li>
                                           <a target="_blank" href="#"><FaGithub/></a>  
                                       </li>
                                   </ul>

                                   <h1>
                                      <Typewriter
                                      onInit={(typewriter) =>
                                    {
                                        typewriter.typeString("I am Abhishek Jain").start()
                                    }}
                                        
                                      />
                                   </h1>

                                   <p>
                                       
                                   <Typewriter
                                      options={{autoStart:true,
                                               loop:true,
                                               delay:40,
                                               strings:["Interested in  web developement","Interested in software development","A student in SGSITS,Indore"],
                                             }}
                                      />  
                                   </p>

                                   <div className="header_button">
                                       <a className="btn btn-outline" href="https://drive.google.com/file/d/19zUVGn8Rl0TIqF6Jtnc70OHXwp_SWbDl/view?usp=sharing">
                                           Download Resume
                                       </a>
                                   </div>
                               
                           </div>
                    </div>
                    <div className="col-6-2">
                         <div data-aos="fade"className="header_img">
                             <img src={Mypic} alt="ME" />
                         </div>
                    </div>
                </div>
            
        </header>
    )
}

export default Banner
