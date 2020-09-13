import React from 'react';

function DisplayProject(props){

  return (
    <div className='project-card' style={{margin: '25px', padding: '20px', paddingBottom: '80px', backgroundColor: 'white', borderRadius: '15px'}}>
        <div style={{textAlign: 'right'}}>
            <i className="far fa-times-circle close-project" onClick={props.goBack}/>
        </div>
        <br/>
        <div className='project-content'>
          <div>
            <h1 className='project-title' style={{fontWeight: '600'}}>{props.title}</h1>
            <br/>
            <h5>{props.description}</h5>
            <br/>
            <h4><a style={{color: '#6b6767'}} href={props.github} target='_blank'><i className="fa fa-code"/> View Code on GitHub</a></h4>
          </div>
          <br/>
          <div className="videoWrapper">
            <iframe width="100%" allowFullScreen style={{border: 'solid 10px grey', borderRadius: '15px'}}
              src={props.youtube}>
            </iframe>
          </div>
        </div>
    </div>
  );
}

export default DisplayProject;