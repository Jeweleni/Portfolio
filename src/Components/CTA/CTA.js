import React from "react";
import Resume1 from "./Resume.pdf"

const CTA = () => {
    return (  
        <div className="cta">
            <a href={Resume1} className="btn" >View Resume</a>
            {/* <a href="contact" className="btn btn-primary">Let's Talk</a> */}
        </div>
    );
}
 
export default CTA;