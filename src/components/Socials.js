import React from 'react';

function Socials(){
  return (
    <div className="socials">
        <i className="fab fa-github socials-icons" onClick={()=>window.open('https://github.com/ChayaGreisman','_blank')}/>
        <i className="fab fa-linkedin socials-icons" onClick={()=>window.open('https://www.linkedin.com/in/chayagreisman/','_blank')}/>
        <i className="far fa-envelope socials-icons" onClick={()=>window.open("mailto: chayamgreisman@gmail.com?subject=Hi%20Chaya!",'_blank')}/>
    </div>
  );
}

export default Socials;