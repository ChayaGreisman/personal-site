import React from 'react';
import {Modal, Button} from 'react-bootstrap';


function IceCreamModal(props){
  return (
      <Modal show={props.show} onHide={props.handleClose} animation={false} centered>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!fdbfdsdgnfggbdfvdsv
                vfbdfnbggn g
                <h1>sdfgawyivuyfcgei</h1>
                <h1>sdfgawyivuyfcgei</h1>
                <h1>sdfgawyivuyfcgei</h1>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
      </Modal>
  );
}

export default IceCreamModal;
