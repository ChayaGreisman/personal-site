import React from 'react';

function Contact(){
  return (
    <div className="contact" style={{paddingTop: "130px"}}>
        <div className="contact-item" onClick={()=>window.open('https://github.com/ChayaGreisman','_blank')}>
            <i className="fab fa-github contact-icons"/>
            <h1>GitHub</h1>
        </div>
        <div className="contact-item" onClick={()=>window.open('https://www.linkedin.com/in/chayagreisman/','_blank')}>
            <i className="fab fa-linkedin contact-icons"/>
            <h1>LinkedIn</h1>
        </div>
        <div className="contact-item" onClick={()=>window.open('https://medium.com/@chayamgreisman','_blank')}>
            <i className="fab fa-medium contact-icons"/>
            <h1>Medium</h1>
        </div>
        <div className="contact-item" onClick={()=>window.open("mailto: chayamgreisman@gmail.com?subject=Hi%20Chaya!&body=Hi,%20I%20hope%20you%20enjoyed%20exploring%20my%20site!%20Looking%20forward%20to%20hearing%20from%20you%20about%20opportunities%20and%20anything%20else%20you%20might%20want%20to%20reach%20out%20about%20in%20this%20email.%20🧿%20Chaya",'_blank')}>  
            <i className="far fa-envelope contact-icons"/>
            <h1>Email</h1>
        </div>
    </div>
  );
}

export default Contact;