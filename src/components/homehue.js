import React from 'react';
import DisplayProject from './DisplayProject';

function HomeHue(props){

  const title = 'HomeHue©️'
  const description = 'HomeHue is an interior design color inspiration app, built with a Rails backend and React frontend with client-side routing, as well as external color detection APIs and Semantic UI for design.'
  const github = 'https://github.com/ChayaGreisman/Flatiron-Mod4-Project'
  const youtube = 'https://www.youtube-nocookie.com/embed/_l3wUuti28s?autoplay=1&mute=0&rel=0'
  const goBack = () => props.history.push('/projects')

  return (
      <DisplayProject title={title} description={description} github={github} youtube={youtube} goBack={goBack}/>
  );
}

export default HomeHue;