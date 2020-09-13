import React from 'react';
import MainTypingText from '../components/MainTypingText';
import Socials from '../components/Socials';

function HomeContainer(){
  return (
    <div style={{marginTop: window.screen.height - (window.screen.height/1.9)}}>
      <Socials/>
      <MainTypingText/> 
    </div>
  );
}

export default HomeContainer;