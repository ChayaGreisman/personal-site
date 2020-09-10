import React from 'react';

function HomeHue(props){
  return (
    <div className='project-card' style={{margin: '25px', padding: '20px', paddingBottom: '80px', backgroundColor: 'white', borderRadius: '15px'}}>
      <div style={{textAlign: 'right'}}>
          <i className="far fa-times-circle close-project" onClick={()=>props.history.push('/projects')}/>
      </div>
      <br/>
      <div className='project-content'>
        <div>
          <h1 className='project-title' style={{fontWeight: '600'}}>HomeHue©️</h1>
          <br/>
          <h5>HomeHue is an interior design color inspiration app, built with a Rails backend and React frontend with client-side routing, as well as external color detection APIs and Semantic UI for design.
          </h5>
          <br/>
          <h4><a style={{color: '#6b6767'}} href='https://github.com/ChayaGreisman/Flatiron-Mod4-Project' target='_blank'><i className="fa fa-code"/> View Code on GitHub</a></h4>
        </div>
        <br/>
        <div className="videoWrapper">
          <iframe width="100%" allowFullScreen style={{border: 'solid 10px grey', borderRadius: '15px'}}
            src="https://www.youtube-nocookie.com/embed/_l3wUuti28s?autoplay=1&mute=0&rel=0">
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default HomeHue;