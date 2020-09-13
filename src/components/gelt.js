import React from 'react';
import DisplayProject from './DisplayProject';

function Gelt(props){

  const title = 'GELT©️'
  const description = 'Gelt is a comprehensive personal finance management app for managing accounts and budgeting all in one place. It was built with a Rails backend, React.js frontend, and Redux.js for state management, plus Bootstrap and Flexbox for design.'
  const github = 'https://github.com/ChayaGreisman/gelt-frontend'
  const youtube = 'https://www.youtube.com/embed/ahcW76NAfiY?autoplay=1&mute=0&rel=0'
  const goBack = () => props.history.push('/projects')

  return (
      <DisplayProject title={title} description={description} github={github} youtube={youtube} goBack={goBack}/>
  );
}

export default Gelt;