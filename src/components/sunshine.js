import React from 'react';
import DisplayProject from './DisplayProject';

function Sunshine(props){

  const title = 'Sunshine Notes©️'
  const description = "SunshineNotes was created for preschool directors or teachers to communicate with parents and keep track of important student information. It has a rails backend, and JavaScript frontend."
  const github = 'https://github.com/ChayaGreisman/sunshine-frontend'
  const youtube = 'https://www.youtube.com/embed/c_lGDjsoXHc?autoplay=1&mute=0&rel=0'
  const goBack = () => props.history.push('/projects')

  return (
      <DisplayProject title={title} description={description} github={github} youtube={youtube} goBack={goBack}/>
  );
}

export default Sunshine;