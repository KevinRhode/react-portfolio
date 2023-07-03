import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Logo from '../images/resume-svgrepo-com.svg';
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

function ResumeIcon() {
  return (       
    <img src={Logo} style={styles.tinyLogo} className="logo" alt="logo" />      
  );
}

export default ResumeIcon;
