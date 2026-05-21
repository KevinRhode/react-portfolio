import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Logo from '../images/LI-In-Bug-black.png';
import { Link } from 'react-router-dom';

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

function LinkedInIcon() {
  return (  

  <Link to={`https://www.linkedin.com/in/kevin-rhode-0ab81695/`} target="_blank" rel="noreferrer">
  <img src={Logo} style={styles.tinyLogo} className="logo" alt="logo" /> 
  </Link>
  );
}

export default LinkedInIcon;
