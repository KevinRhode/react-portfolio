import React from 'react';
import {StyleSheet} from 'react-native';
import Logo from '../images/github-mark.svg';
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

function GitHubIcon({pathToFollow}) {
  return (  
    
      <Link to={pathToFollow? pathToFollow : "https://github.com/KevinRhode"} target="_blank" rel="noreferrer">
        <img src={Logo} style={styles.tinyLogo} className="logo" alt="logo" /> 
      </Link>
       
         
  );
}

export default GitHubIcon;
