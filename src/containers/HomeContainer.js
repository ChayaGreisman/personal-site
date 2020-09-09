import React from 'react';
import MainTypingText from '../components/MainTypingText';
import SmallTypingText from '../components/SmallTypingText';
import Socials from '../components/Socials';

function HomeContainer(){
  return (
    <div style={{marginTop: window.screen.height - (window.screen.height/1.95)}}>
      <Socials/>
      <MainTypingText/> 
      {/* <SmallTypingText/>  */}
    </div>
  );
}

export default HomeContainer;