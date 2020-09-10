import React from 'react';

function Gelt(props){

  return (
    <div className='project-card' style={{margin: '25px', padding: '20px', paddingBottom: '80px', backgroundColor: 'white', borderRadius: '15px'}}>
        <div style={{textAlign: 'right'}}>
            <i className="far fa-times-circle close-project" onClick={()=>props.history.push('/projects')}/>
        </div>
        <br/>
        <div className='project-content'>
          <div>
            <h1 className='project-title' style={{fontWeight: '600'}}>GELT©️</h1>
            <br/>
            <h5>Gelt is a comprehensive personal finance management app for managing accounts and budgeting all in one place.
                It was built with a Rails backend, React.js frontend, and Redux.js for state management, plus Bootstrap and Flexbox for design. 
            </h5>
            <br/>
            <h4><a style={{color: '#6b6767'}} href='https://github.com/ChayaGreisman/gelt-frontend' target='_blank'><i className="fa fa-code"/> View Code on GitHub</a></h4>
          </div>
          <br/>
          <div className="videoWrapper">
            <iframe width="100%" allowFullScreen style={{border: 'solid 10px grey', borderRadius: '15px'}}
              src="https://www.youtube.com/embed/ahcW76NAfiY?autoplay=1&mute=0&rel=0">
            </iframe>
          </div>
        </div>
    </div>
  );
}

export default Gelt;