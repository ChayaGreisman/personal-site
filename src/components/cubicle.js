import React from 'react';
import DisplayProject from './DisplayProject';

function Cubicle(props){

  const title = 'CUBICLE©️'
  const description = 'Cubicle is a project management dashboard app that allows users to more efficiently manage projects, team members, and tasks. Built with a Rails backend and JavaScript frontend.'
  const github = 'https://github.com/ChayaGreisman/Flatiron-Mod3-Project'
  const youtube = 'https://www.youtube.com/embed/OaI9uW1RYtY?autoplay=1&mute=0&rel=0'
  const goBack = () => props.history.push('/projects')

  return (
      <DisplayProject title={title} description={description} github={github} youtube={youtube} goBack={goBack}/>
  );
}

export default Cubicle;