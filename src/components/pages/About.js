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
      Hi, my name is Kevin. I program for a living, this website is one of my creations. I live in the Grand Rapids area and enjoy socializing with my friends! You'll find me in co-op sports leagues for fun. I also enjoy watching hockey and going to watch live sports. 
                
                    The rest of my time I spend with my wife and son. We love to go ice skating and exploring the outdoors. We have many cherished memories so far and hopefully many more to come. 
                    
        information About myself which i will share with the world! basic about page that will be filled with awsome info!!!!!!!!
      </p>
    </div>
  );
}
