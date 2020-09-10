import React from 'react';

function ProjectsContainer(props){
  return (
    <div style={{paddingTop: "75px"}}>
      <img className="project-image" src='./gelt.gif' alt="gelt" onClick={()=>props.history.push('/projects/gelt')}/>
      <img className="project-image" src='./homehue.gif' alt="home-hue" onClick={()=>props.history.push('/projects/home-hue')}/>
      <img className="project-image" src='./sunshine.gif' alt="sunshine-notes" onClick={()=>props.history.push('/projects/sunshine')}/>
      <img className="project-image" src='./cubicle.gif' alt="cubicle" onClick={()=>props.history.push('/projects/cubicle')}/>
      <img className="project-image" src='./goodnightmoon.gif' alt="goodnight-moon" onClick={()=>props.history.push('/projects/goodnight-moon')}/>
      <img className="project-image" src='./storemanager.gif' alt="store-manager" onClick={()=>props.history.push('/projects/store-manager')}/>
    </div>
  );
}

export default ProjectsContainer;