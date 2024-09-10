import React from "react";
import resume from "./resume.pdf"

const CTA = () => {
    return (  
        <div className="cta">
            <a href ={resume} className="btn" >View Resume</a>
            
        </div>
    );
}
 
export default CTA;