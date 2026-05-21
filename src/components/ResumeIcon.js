import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Logo from '../images/resume-svgrepo-com.svg';
import { Link } from 'react-router-dom';
import resume from "../images/KevinRhode_Resume.docx";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

function ResumeIcon() {
  return (      
     <form method="get" action={resume} target="_blank" className="downloadres">
      <button className="" type="submit" value="download" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
        <img src={Logo} style={styles.tinyLogo} className="logo" alt="Download Resume" />
      </button>
    </form>
    // <img src={Logo} style={styles.tinyLogo} className="logo" alt="logo" />      
  );
}

export default ResumeIcon;
