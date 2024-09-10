import React from "react";
import Resume from "./Resume.pdf"

const CTA = () => {
    return (  
        <div className="cta">
            <a href= {Resume} className="btn" >View Resume</a>
            
        </div>
    );
}
 
export default CTA;