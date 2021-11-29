import {React, useState} from 'react';
import { Accordion, Modal } from 'react-bootstrap';
import {  Container, Button, Input } from 'reactstrap';
import './Validatecontent.css';
  

const Validatecontent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="mt-5 mb-5">
                <Container>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1 <i className="fas fa-chevron-down"></i></Accordion.Header>
                            <Accordion.Body>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.</p>
                            <Button variant="primary" color="primary" onClick={handleShow}>
                            Approved or Reject
                            </Button>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2 <i className="fas fa-chevron-down"></i></Accordion.Header>
                            <Accordion.Body>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.</p>                            
                            <Button variant="primary" color="primary" onClick={handleShow}>
                            Approved or Reject
                            </Button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="d-flex justify-content">
        <div className="radio">
            <Input id="radio-1" name="radio" type="radio" checked></Input>
            <label for="radio-1" class="radio-label1 app">Approved</label>
        </div>
        <div className="radio">
            <Input id="radio-1" name="radio" type="radio" checked></Input>
            <label for="radio-1" class="radio-label1 rej">Reject</label>
        </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        </>
    );
} 

export default Validatecontent;