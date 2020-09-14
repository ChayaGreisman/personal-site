import React from 'react';
import MainTypingText from '../components/MainTypingText';
import Socials from '../components/Socials';

function HomeContainer(){
  return (
    <div style={{marginTop: window.screen.height - (window.screen.height/1.6)}}>  
      <MainTypingText/>
      <div className='appearing-text-container' >
        <h3 className='appearing-text'></h3>
      </div>
      <Socials/>
    </div>
  );
}

export default HomeContainer;