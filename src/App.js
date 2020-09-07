import React from 'react';
import './App.css';
import IceCreamModal from './components/IceCreamModal';
import NavBar from './components/Nav';


function App() {

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">

      <IceCreamModal show={show} handleClose={handleClose}/>
      <NavBar handleShow={handleShow}/>
      
      <p className="typing">Hey! I'm Chaya.</p>
      <div id='about'>
          <img src="./mepic2.png" alt="chaya-greisman"/>
          <h1 style={{fontFamily: 'Raleway', fontSize: '10vw'}}>Hey! I'm Chaya.</h1>
      </div>
    </div>
  );
}

export default App;
