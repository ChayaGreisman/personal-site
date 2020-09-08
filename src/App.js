import React from 'react';
import './App.css';
import IceCreamModal from './components/IceCreamModal';
import NavBar from './components/Nav';


function App() {

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  return (
    <div className="App">

      <IceCreamModal show={show} handleClose={handleClose}/>
      <NavBar handleShow={handleShow}/>
      
      <p style={{marginTop: window.screen.height - (window.screen.height/2.6)}} className="typing">Hey! I'm Chaya.</p>


      <h1>       
        <span
          className="txt-rotate"
          data-period="2000"
          data-rotate='[ "software engineer", "knowledge junkie", "self taught gymnast", "ice cream enthusiast", "creator" ]'>
        </span> 
      </h1>     


      <div id='about'>
          <img src="./mepic2.png" alt="chaya-greisman" className="chaya-greisman-pic"/>
          
      </div>
    </div>
  );
}

export default App;
