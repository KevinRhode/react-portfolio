import React from "react";
import resume from "../images/kevinrhoderesume.pdf";

const DownloadButton = () => {
   
    return (       
        <form method="get" action={resume} target="_blank" style={{display:'flex'}}  >
            <button type="submit" value="download" style={{alignItems:'center', backgroundColor:'black',color:'white',borderRadius:'0.25rem'}}>Download Resume</button>
            </form>
    );
};
export default DownloadButton;