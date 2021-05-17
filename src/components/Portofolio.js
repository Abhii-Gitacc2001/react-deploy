import React,{useEffect} from 'react'
import Mypic4 from './pic-4.jpg'
import Mypic1 from './pic-1.jpg'
import Mypic2 from './pic-2.jpg'
import Mypic3 from './pic-3.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Portofolio = () => {
    useEffect(() => {
        Aos.init({
            offset:200,
            duration :500,
            easing:"ease-in-out"
      });
       
    }, []);
    return (
        <div id="PORTOFOLIO" className="portofolio">
            <div className="portofolio-part-1">
                <h1>PORTOFOLIO</h1>
                <div className="potofolio-redline"></div>
            </div>
            <div data-aos="fade-up"className="portofolio-part-2">
                <div className="container-img">
                <img src={Mypic1} height="300px" width="300px" alt="" />
                    <div class="overlay">
                      <div class="text"><h1>A todo list</h1><p>Using react.js</p></div>
                    </div>
                </div>
                <div className="container-img">
                <img src={Mypic2} height="300px" width="300px" alt="" />
                    <div class="overlay">
                      <div class="text"><h1>3 Challenges</h1><p>Using Javascript</p></div>
                    </div>
                </div>
                <div className="container-img">
                <img src={Mypic3} height="300px" width="300px" alt="" />
                    <div class="overlay">
                      <div class="text">
                          <h1>Stone & Papper</h1>
                          <p>A Javascript game</p>
                      </div>
                    </div>
                </div>
                
                    
                    
            </div>
        </div>
    )
}

export default Portofolio
