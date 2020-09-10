import React from 'react';

function Cubicle(props){
  return (
    <div className='project-card' style={{margin: '25px', padding: '20px', paddingBottom: '80px', backgroundColor: 'white', borderRadius: '15px'}}>
      <div style={{textAlign: 'right'}}>
          <i className="far fa-times-circle close-project" onClick={()=>props.history.push('/projects')}/>
      </div>
      <br/>
      <div className='project-content'>
        <div>
          <h1 className='project-title' style={{fontWeight: '600'}}>CUBICLE©️</h1>
          <br/>
          <h5>Cubicle is a project management dashboard app that allows users to more efficiently manage projects, team members, and tasks. Built with a Rails backend and JavaScript frontend.
          </h5>
          <br/>
          <h4><a style={{color: '#6b6767'}} href='https://github.com/ChayaGreisman/Flatiron-Mod3-Project' target='_blank'><i className="fa fa-code"/> View Code on GitHub</a></h4>
        </div>
        <br/>
        <div className="videoWrapper">
          <iframe width="100%" allowFullScreen style={{border: 'solid 10px grey', borderRadius: '15px'}}
            src="https://www.youtube.com/embed/OaI9uW1RYtY?autoplay=1&mute=0&rel=0">
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Cubicle;