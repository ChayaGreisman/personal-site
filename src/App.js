import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './App.scss';
import NavBar from './components/Nav';
import IceCreamModal from './components/IceCreamModal';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ResumeContainer from './containers/ResumeContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import Contact from './components/contact';
import Gelt from './components/gelt';
import HomeHue from './components/homehue';
import GoodnightMoon from './components/goodnight';
import Cubicle from './components/cubicle';
import StoreManager from './components/storemanager';
import Sunshine from './components/sunshine';


function App() {

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <IceCreamModal show={show} handleClose={handleClose}/> 
      <Router>
        <Route render={routerProps=><NavBar handleShow={handleShow} {...routerProps}  />}/> 
        <Switch>
          <Route exact path="/" component= {HomeContainer} />
          <Route exact path="/about" component= {AboutContainer} />
          <Route exact path="/resume" component= {ResumeContainer} />
          <Route exact path="/projects" component={ProjectsContainer} />
            <Route exact path="/projects/gelt" component= {Gelt} />
            <Route exact path="/projects/home-hue" component= {HomeHue} />
            <Route exact path="/projects/goodnight-moon" component= {GoodnightMoon} />
            <Route exact path="/projects/sunshine" component= {Sunshine} />
            <Route exact path="/projects/cubicle" component= {Cubicle} />
            <Route exact path="/projects/store-manager" component= {StoreManager} />
          <Route exact path="/contact" component= {Contact} />
        </Switch> 
      </Router>
    </div>
  );
}

export default App;