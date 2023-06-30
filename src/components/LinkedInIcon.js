import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Logo from '../images/LI-In-Bug.png';

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
    <img src={Logo} style={styles.tinyLogo} className="logo" alt="logo" />      
  );
}

export default LinkedInIcon;
