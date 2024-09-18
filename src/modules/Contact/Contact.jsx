import React, { useContext } from "react";
import '../../styles/Contact.css'
import { DemoContext } from "../../Context/Context";
import  AccordionTransition  from "../../components/Accordian";



const Contact = () => {
    const info=useContext(DemoContext);
    const leaf=info.data[0].main.leaf;
    const bLeaf=info.data[0].main.bLeaf;

   


  return (
    <div className="mainContact">
      <div className="get">Get In Touch</div>
      <div className="contactRelative">
        <div className="contact">
          <div className="leafContact">
        
            <img src={leaf} alt="" />{" "}
          </div>
          <div className="diffContact">
            <div className="contactP">+123 456 7890 <br /> +123 456 7890</div>
            <div className="contactP"> info@example.com  <br />support@example.com</div>
            <div className="contactP">1569 Ave, New York, <br /> NY 10028, USA</div>
          </div>
        </div>
    
      </div>
      <div className="faqClass">
        <div className="faq">
        Frequently Asked Question!
        </div>
          <div>
            <img src={bLeaf} alt="" />{" "}
          </div>
          <div className="accordionDiv">
            <div className="accordion">
            <AccordionTransition/>
            </div>
            <div className="accordion">
            <AccordionTransition/>
            </div>
           
            </div>
     

        </div> 
    </div>
  );
};

export default Contact;
