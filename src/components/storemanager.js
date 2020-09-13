import React from 'react';
import DisplayProject from './DisplayProject';

function StoreManager(props){

  const title = 'Store Manager©️'
  const description = "StoreManager is a store inventory management CLI (non-browser) app built in Ruby."
  const github = 'https://github.com/ChayaGreisman/Flatiron-Mod1-Project'
  const youtube = 'https://www.youtube.com/embed/RSkA_wYIuz4?autoplay=1&mute=0&rel=0'
  const goBack = () => props.history.push('/projects')

  return (
      <DisplayProject title={title} description={description} github={github} youtube={youtube} goBack={goBack}/>
  );
}

export default StoreManager;