import React from 'react';
import ProfileLogo from '../../images/user.png';

import { StyleSheet } from 'react-native-web';

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

export default function About() {
  return (
    <div>
      <h2>About Page</h2>
      <img src={ProfileLogo} alt="black and white profile logo placeholder" style={styles.tinyLogo} /> 
         
      <p>
        information About myself which i will share with the world! basic about page that will be filled with awsome info!!!!!!!!
      </p>
    </div>
  );
}
