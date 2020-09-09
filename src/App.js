import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/Nav';
import IceCreamModal from './components/IceCreamModal';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import Contact from './components/contact';


function App() {

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      
      <IceCreamModal show={show} handleClose={handleClose}/> 
      <Router>
        <React.Fragment>
          {/* <NavBar handleShow={handleShow}/> */}
          <Route render={routerProps=><NavBar handleShow={handleShow} {...routerProps}  />}/> 
        <Switch>
          {/* <Route exact  path ='/rooms/:id' render={routerProps=><RoomPage {...routerProps} rooms={this.state.rooms} currentUser={this.state.currentUser} handleDeleteRoom={this.handleDeleteRoom} handleNewRoomPhoto={this.handleNewRoomPhoto}/>}/>  */}
          <Route exact path="/" component= {HomeContainer} />
          <Route exact path="/about" component= {AboutContainer} />
          <Route exact path="/projects" component= {ProjectsContainer} />
          <Route exact path="/contact" component= {Contact} />
        </Switch>  
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;