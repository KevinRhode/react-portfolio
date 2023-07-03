import React from "react";
import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";
import ResumeIcon from "./ResumeIcon";

import '../styles/main-css.css'

function Footer(){
    return (
      <div className="footerGroup">
        <GitHubIcon />
        <LinkedInIcon />
        <ResumeIcon />
      </div>
    );
}


export default Footer;