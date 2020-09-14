import React from 'react';

function ResumeContainer(){
  return (
    <iframe src="./resume.pdf" width="100%" height={window.screen.height - window.screen.height/5.5}></iframe>
  );
}

export default ResumeContainer;