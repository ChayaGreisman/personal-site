import React from 'react';
import MainTypingText from '../components/MainTypingText';
import Socials from '../components/Socials';

function HomeContainer(){
  return (
    <div className='home-content' >

      
        <img width='20%' src="./me.jpg" alt="chaya-greisman" className="me-pic"/>
     

      
        <MainTypingText/>
      

      <div className='appearing-text-container' >
        <h3 className='appearing-text'></h3>
      </div>

      <Socials/>
    </div>
  );
}

export default HomeContainer;