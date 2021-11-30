import React,{useState} from 'react';
import { Link } from "react-router-dom";
import { Modal,Form } from "react-bootstrap";
import {Col,Container,Row} from "reactstrap";
import Downimg from "../../Images/downimg.png";
// import './Users/News.css';
import Button from "@restart/ui/esm/Button";

// import InputEmoji from "react-input-emoji";

function Leftbar() {
    const [show, setShow] = useState(false);
;
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    return (
        <>
           <ul className="userlink">
                                <li className="bNone">
                                    <Button className="createBtn"><i class="far fa-edit"></i> Create Post</Button>
                                </li>
                                <hr/>
                                <li>
                                    <Link to="/" activeClassName="active"><i class="fas fa-home"></i> Home</Link>
                                </li>
                                <li>
                                    <Link to="/notification" activeClassName="active"><i class="fas fa-bell"></i> Notifications</Link>
                                </li>
                                <li>
                                    <Link to="/live" activeClassName="active"><i class="fas fa-satellite-dish"></i> Live</Link>
                                </li>
                                <li className="bNone">
                                    <Link to="/profile" activeClassName="active"><i class="fas fa-male"></i> Profile</Link>
                                </li>
                                <hr/>
                                <li>
                                    <Link to="/setting" activeClassName="active"><i class="fas fa-cog"></i> Settings</Link>
                                </li>
                                <li>
                                    <Link to="" activeClassName="active"><i class="fas fa-question-circle"></i> Help</Link>
                                </li>
                                <li className="bNone">
                                    <Link to="" onClick={handleShow}  activeClassName="active"><i class="fas fa-download"></i> Download</Link>
                                </li>
            </ul>

           
<div className="down-pop">
            <Modal show={show} id="popdown" onHide={handleClose}>
    
         <Modal.Body>
         
         <Row>
        
  <Col md="6">
  <div className="popbtn">
<div className="poptext">
    <h3>Express yourself freely</h3>
</div>
<div className="bttn">
     <div className="playbtn">
   <Link className="btn btn-google text-white" to="#" title="Google Play">Google Play</Link>
   <i class="fab fa-google-play"></i>
    </div>
    <div className="playbtn mt-3">
   <Link className="btn btn-apple text-white" to="#" title="Google Play">App Store</Link>
   <i class="fab fa-apple"></i>
 
    </div>
    </div>
  </div>
  </Col>

 
  <Col md="6">
  <div className="popimg">
<img src={Downimg} alt={Downimg} />
  </div>
  </Col>
  
</Row>

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
      </div>  
        </>
    );
}

export default Leftbar;