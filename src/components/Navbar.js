import React,{useState} from 'react'

import Mypic from './Abhii-removed.png'
const Navbar = () => {
    const [Open, setstate] = useState(false);
    return (
        <div className="navbar">
                    <div id="logo">
                        <img src={Mypic} alt="" /> 
                    </div>
                    
                    <ul className="nav-items" style={{transform : Open ? "translateX(0px)":""}}>
                            <li> <a href=""> Home</a></li>
                            <li> <a href="#ABOUT"> About</a></li>
                            <li> <a href="#SKILL"> Skills</a></li>
                            <li> <a href="#PORTOFOLIO"> portofolio</a></li>
                            <li> <a href=""> contact</a></li>
                    </ul>
                    {/* font awesome icon */}
                    <i onClick={() => setstate(!Open)} className="fas fa-bars burger"></i>
                          
        </div>
    )
}

export default Navbar
