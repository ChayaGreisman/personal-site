import React from 'react';
import SmallTypingText from '../components/SmallTypingText';
import { useHistory } from 'react-router'

function AboutContainer(){

  const history = useHistory()

  return (
    <div style={{paddingTop: "110px"}}>
        
        <img src="./mepic2.png" alt="chaya-greisman" className="chaya-greisman-pic"/>
        <div className = 'about-text'>
          <h4>I'm Chaya, a Full Stack Developer with experience in Rails, JavaScript, React, and multiple CSS frameworks.</h4>
          <br/>
          <h4>I'm passionate about clean design and delivering a full product that is both practical and intuitive.</h4>
        </div>
        <i className="fas fa-long-arrow-alt-down" onClick={()=>history.go(0)}/>
        <br/>
        <br/>
        <SmallTypingText/>
    </div>
  );
}

export default AboutContainer;