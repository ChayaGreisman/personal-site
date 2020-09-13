import React from 'react';
import DisplayProject from './DisplayProject';

function GoodnightMoon(props){

  const title = 'Goodnight Moon©️'
  const description = "GoodnightMoon is a children's bedtime app featuring books and nursery rhymes, built in Rails."
  const github = 'https://github.com/ChayaGreisman/Flatiron-Mod2-Project'
  const youtube = 'https://www.youtube.com/embed/A7p3N1Fk8JE?autoplay=1&mute=0&rel=0'
  const goBack = () => props.history.push('/projects')

  return (
      <DisplayProject title={title} description={description} github={github} youtube={youtube} goBack={goBack}/>
  );
}

export default GoodnightMoon;