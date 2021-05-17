import React from 'react'
import { FaGithub} from "react-icons/fa";
const Services = () => {
    const [header] = React.useState(
        {
            mainheading:"SERVICES",
            subheading:"My Services",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore nihil non laboriosam dolorem dicta quibusdam eum itaque rem quis veritatis mollitia totam, quaerat et numquam, aliquid, sequi illum. Voluptatibus!",
        }
    );
    const [state] = React.useState([
        {
          id:1,
          icon:"Fagithub",
          heading:"Web Development",
          text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore nihil non laboriosam dolorem dicta quibusdam eum itaque rem quis veritatis mollitia totam, quaerat et numquam, aliquid, sequi illum. Voluptatibus!",
        },

        {
            id:2,
            icon:"Fagithub",
            heading:"Photography",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore nihil non laboriosam dolorem dicta quibusdam eum itaque rem quis veritatis mollitia totam, quaerat et numquam, aliquid, sequi illum. Voluptatibus!",
          },

          {
            id:3,
            icon:"Fagithub",
            heading:"Web Design",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore nihil non laboriosam dolorem dicta quibusdam eum itaque rem quis veritatis mollitia totam, quaerat et numquam, aliquid, sequi illum. Voluptatibus!",
          },

          {
            id:4,
            icon:"Fagithub",
            heading:"App Development",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore nihil non laboriosam dolorem dicta quibusdam eum itaque rem quis veritatis mollitia totam, quaerat et numquam, aliquid, sequi illum. Voluptatibus!",
          },

          {
            id:5,
            icon:"Fagithub",
            heading:"Video Editing ",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore nihil non laboriosam dolorem dicta quibusdam eum itaque rem quis veritatis mollitia totam, quaerat et numquam, aliquid, sequi illum. Voluptatibus!",
          },

          {
            id:6,
            icon:"Fagithub",
            heading:"Seo expart",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore nihil non laboriosam dolorem dicta quibusdam eum itaque rem quis veritatis mollitia totam, quaerat et numquam, aliquid, sequi illum. Voluptatibus!",
          },
         ] );
    return (
        <div className="services">
            <div className="container">
                <div className="services_header">
                    <div className="common">
                        <h3 className="heading">{header.mainheading}</h3>
                        <h1 className="mainHeader">{header.subheading}</h1>
                        <p className="maincontent">{header.text}</p>
                        <div className="linered"></div> 
                    </div>
                    <div className="row">
                         {state.map(info=>(
                            <div className="col-4">
                            <div className="service_box">
                            <FaGithub className="common-icon"/>
                            <div className="service_box_header">{info.heading}</div>
                            <div className="service_box-p">{info.text}</div>
                            </div>
                        </div>
                         ))}
                        
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Services
