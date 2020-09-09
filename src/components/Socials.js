import React from 'react';

function Socials(){
  return (
    <div className="socials">
        <i className="fab fa-github socials-icons" onClick={()=>window.open('https://github.com/ChayaGreisman','_blank')}/>
        <i className="fab fa-linkedin socials-icons" onClick={()=>window.open('https://www.linkedin.com/in/chayagreisman/','_blank')}/>
        <i className="far fa-envelope socials-icons" onClick={()=>window.open("mailto: chayamgreisman@gmail.com?subject=Hi%20Chaya!&body=Hi,%20I%20hope%20you%20enjoyed%20exploring%20my%20site!%20Looking%20forward%20to%20hearing%20from%20you%20about%20opportunities%20and%20anything%20else%20you%20might%20want%20to%20reach%20out%20about%20in%20this%20email.%20🧿%20Chaya",'_blank')}/>
    </div>
  );
}

export default Socials;