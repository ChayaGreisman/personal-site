import React from 'react';

function AboutContainer(){
  return (
    <div style={{paddingTop: "75px"}}>
        {/* <img src="./mepic2.png" alt="chaya-greisman" className="chaya-greisman-pic"/> */}
        {/* <img src="./me-pic.png" alt="chaya-greisman" className="chaya-greisman-pic"/> */}
        {/* <img src="./me-pic-arrow.png" alt="chaya-greisman" className="chaya-greisman-pic"/> */}
        <img src="./me-pic-arrow-2.png" alt="chaya-greisman" className="chaya-greisman-pic"/>
        <div className = 'about-text'>
          <h4>I'm a Full Stack Developer with experience in Ruby, Rails, JavaScript, React, and multiple CSS frameworks.</h4>
          <br/>
          <h4>I'm passionate about clean design and delivering a full product that is both practical and intuitive.</h4>
          <br/>
          <h4>If I'm not coding, I'm probably reading the latest tech mogul biography or baking pumpkin muffins.</h4>
        </div>
        <br/>
    </div>
  );
}

export default AboutContainer;