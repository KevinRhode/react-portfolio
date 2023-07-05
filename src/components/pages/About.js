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
         
      <p>Hey there! I'm Kevin, a passionate software developer residing in the vibrant Grand Rapids area. Programming is not just my profession but also my creative outlet, and I take great pride in crafting innovative websites like the one you're currently browsing. When I'm not engrossed in coding, you'll likely find me immersed in the lively atmosphere of co-op sports leagues, where I enjoy both the thrill of competition and the joy of socializing with my friends.
      </p><p>
Sports play a significant role in my life, and as an avid hockey enthusiast, I make it a point to attend live games whenever possible. The energy and camaraderie of those events never fail to captivate me. However, my greatest joy comes from spending quality time with my loving wife and adorable son. Together, we embark on exciting adventures, whether it's lacing up our skates for some ice skating fun or exploring the great outdoors. We've already created countless cherished memories, and we eagerly look forward to making many more in the future.
    </p><p>
As a software developer who values work-life balance, I believe that finding fulfillment in both professional and personal realms is crucial. So, whether I'm coding complex algorithms or cheering passionately for my favorite team, I strive to embrace every aspect of life with enthusiasm and dedication. </p>
    </div>
  );
}
