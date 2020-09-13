import React from 'react';
import {Modal} from 'react-bootstrap';

function IceCreamModal(props){
  return (
    <div className="vertical-alignment-helper ice-cream">
      <Modal show={props.show} onHide={props.handleClose} animation={false} className='vertical-align-center' centered>
        <Modal.Body>
          <strong>Favorite's gotta be mint chip ... yours?</strong>
          <br/>
          <small><strong>Let's connect:</strong></small>
          <br/>
          <a href = "mailto: chayamgreisman@gmail.com?subject=Hi%20Chaya!&body=Hi,%20I%20hope%20you%20enjoyed%20exploring%20my%20site!%20Looking%20forward%20to%20hearing%20from%20you%20about%20opportunities%20and%20anything%20else%20you%20might%20want%20to%20reach%20out%20about%20in%20this%20email.%20🧿%20Chaya">
              <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
              </svg>
          </a>
          <br/>
          <br/>
          <button className="ice-cream-close" onClick={props.handleClose}>
              Close
          </button>
        </Modal.Body>
      </Modal>
      </div>
  );
}
export default IceCreamModal;