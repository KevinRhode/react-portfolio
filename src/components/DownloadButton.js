import React from "react";
import resume from "../images/KevinRhode_Resume.docx";

const DownloadButton = () => {
   
    return (       
        <form method="get" action={resume} target="_blank" className="downloadres"  >
            <button className="downloadbtn" type="submit" value="download">Download Resume</button>
            </form>
    );
};

export default DownloadButton;