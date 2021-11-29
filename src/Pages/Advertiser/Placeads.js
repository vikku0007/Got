import {React, useState} from 'react';
import { Accordion, Modal } from 'react-bootstrap';
import { Container, Button} from 'reactstrap';
import './Placeads.css';
import 'react-tabs/style/react-tabs.css';
import Check from '../../Images/check.png';
  

const Placeads = () => {
   
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
                            Post ads here
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
                            Post ads here
                            </Button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion> 
                     
                </Container>
            </div>
            <Modal show={show} onHide={handleClose}>        
        <Modal.Body>
         <div className="card">
         <img src={Check} alt={Check} className="checkIcon" />
         <h4 className="text-center">Success!</h4>
         <p className="text-center">We've sent a confirmation to your e-mail
for verification.</p>
         </div>
                </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>          
        </Modal.Footer>
      </Modal>
        </>
    );
} 

export default Placeads;