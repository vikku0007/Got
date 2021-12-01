import React, {useState} from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import { Form, Modal } from "react-bootstrap";
import './Setting.css';
import Leftbar from '../Sidebar/Leftbar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
function Setting() {
const [value, setValue] = React.useState('1');
const handleChange = (event, newValue) => {
setValue(newValue);
};
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
return (
<>
<div className="mainBody">
   <Container>
      <div class="d-flex
         ">
         <div className="stickyPos">
            <Leftbar />
         </div>
         <div className="contentSection" id="conSe">
            <Tabs className="verticalTabs">
               <Row>
                  <Col md={6} xs={12}>
                  <h5 className="notify-heading mb-3"><b>Setting</b></h5>
                  <TabList>
                     <Tab>Change Password</Tab>
                     <Tab>Email</Tab>
                     <Tab>Phone</Tab>
                     <Tab>Languages</Tab>
                     <Tab>Privacy</Tab>
                     <div className="devider"></div>
                     <Tab>Delete Account</Tab>
                     <div className="devider"></div>
                  </TabList>
                  <Link to="#" className="red f-16" onClick={handleShow}>
                        Logout</Link>
                  </Col>
                  <Col md={6} xs={12}>
                  
                  <TabPanel>
                    <h5 className="notify-heading mb-3"><b>Change Password</b></h5>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Current Password</Form.Label>
                            <Form.Control type="password" placeholder="Current Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="New Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>
                        </Form>
                  </TabPanel>
                  <TabPanel>
                    <h5 className="notify-heading mb-3"><b>Email</b></h5>
                    <p className="email-veri mt-5">You have verified your email address</p>
                    <p className="email-com">r*********y@n*****.com</p>
                    
                  </TabPanel>
                  <TabPanel>
                    <h5 className="notify-heading mb-3"><b>Phone</b></h5>
                    <p className="email-com mt-5">You have not added any phone number.</p>
                    <p className="email-veri mt-3">Your phone number will be used to regain access to your GETTR account if you forget your password.</p>
                    <Button className="Phone-btn mt-3" type="button">Add Phone</Button>
                  </TabPanel>
                  <TabPanel>
                  <h5 className="notify-heading mb-3"><b>Languages</b></h5>
                    <p className="lang-com mt-3">You’ll be able to see GETTR, people, and trends in the language you choose.</p>
                  <Form id="lang">
                    {['radio'].map((type) => (
                        <div key={`English-English-${type}`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`English - English-${type}`}
                            label={`English-English`}
                            name="group1"
                        />
                        <Form.Check
                            type={type}
                            label={`German - Deutsch`}
                            id={`German-Deutsch-${type}`}
                            name="group1"
                        />
                        <Form.Check
                            type={type}
                            label={`Spanish - Español`}
                            id={`Spanish-Español-${type}`}
                            name="group1"
                        />
                        <Form.Check
                            type={type}
                            label={`French - français`}
                            id={`French-français-${type}`}
                            name="group1"
                        />
                        <Form.Check
                            type={type}
                            label={`Hausa - Hausa`}
                            id={`Hausa-Hausa-${type}`}
                            name="group1"
                        />
                        <Form.Check
                            type={type}
                            label={`Hungarian - Magyar`}
                            id={`Hungarian-Magyar-${type}`}
                            name="group1"
                        />
                        <Form.Check
                            type={type}
                            label={`Hindi - हिंदी`}
                            id={`Hindi-Hindi-${type}`}
                            name="group1"
                        />
                        <Form.Check
                            type={type}
                            label={`Italian - Italiano`}
                            id={`Italian-Italiano-${type}`}
                            name="group1"
                        />
                        <Form.Check
                            type={type}
                            label={`Japanese - 日本語`}
                            id={`Japanese-Japanese-${type}`}
                            name="group1"
                        />
                        <Form.Check
                            type={type}
                            label={`Korean - 한국어`}
                            id={`Korean-Korean-${type}`}
                            name="group1"
                        />
                        <Form.Check
                            type={type}
                            label={`Portuguese (Brazil) - Português (Brasil)`}
                            id={`Portuguese-Portuguese-${type}`}
                            name="group1"
                        />
                        <Form.Check
                            type={type}
                            label={`Portuguese (Portugal) - Português (Portugal)`}
                            id={`Portugal-Portugal-${type}`}
                            name="group1"
                        />
                        <Form.Check
                            type={type}
                            label={`Somali - Soomaaliga`}
                            id={`Somali-Somali-${type}`}
                            name="group1"
                        />
                        <Form.Check
                            type={type}
                            label={`Chinese (Simplified) - 中文(简体)`}
                            id={`Chinese-Chinese-${type}`}
                            name="group1"
                        />
                        <Form.Check
                            type={type}
                            label={`Chinese (Traditional) - 中文(繁體)`}
                            id={`Chinese-Chinese-${type}`}
                            name="group1"
                        />
                        <Button className="Phone-btn mt-3" type="button">Change Language</Button>

                        </div>
                    ))}
                    </Form>
                  </TabPanel>
                  <TabPanel>
                  <h5 className="notify-heading mb-3"><b>Privacy</b></h5>
                  <Tabs className="customtabs" id="mute">
                                <TabList>
                                <Tab>Muted</Tab>
                                <Tab>Block</Tab>
                                </TabList>
                                <TabPanel>
                                <div className="notify-content text-center mt-5">
                                <h6>You aren't muting anyone</h6>
                                <p>When you mute an account, you won't see their posts on your timeline</p>
                                </div>
                                </TabPanel>                                
                                <TabPanel>
                                <div className="notify-content text-center mt-5">
                                <h6>You aren't blocking anyone</h6>
                                <p>When you block someone, that person won't be able to follow or message you, and you won't receive their notifications either.</p>
                                </div>
                                </TabPanel>        
                             </Tabs>
                  </TabPanel>
                  <TabPanel>
                    <h5 className="notify-heading mb-3"><b>Delete Account</b></h5>
                    
                  <div className="d-flex mb-3">
                    <div className="live-left mr-3">
                            <div className="live-image">
                            <i class="fas fa-user"></i>          
                            </div>
                        </div>
                        <div className="live-right">
                                            <div className="live-content">
                                                <p><b>rupali00007</b></p>
                                                <p>@rupali00007</p>                                                
                                                </div>
                                                </div>
                    </div>
                    <p className="delete-com mt-3">This will delete your GETTR account</p>
                    <p className="delete-veri mt-3">You are about to start the process of deleting your GETTR account and all of its data. Your public profile, posts, and post replies will be deleted.</p>
                    <p className="delete-veri mt-5">You cannot undo this action, and we cannot restore your GETTR account.</p>
                    <div className="text-center  mt-3">
                        <Link to="#" className="dlt" onClick={handleShow}>Delete Account</Link>
                    </div>
                  </TabPanel>
                  </Col>
               </Row>
            </Tabs>
         </div>
      </div>
      <Modal show={show} onHide={handleClose} id="logout-modal">        
        <Modal.Body>
        <h3 className="text-center mt-3">rupali00007</h3>
        <p className="text-center mt-3">Are you sure you want to log out<br /> of GETTR?</p>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
          Cancle
          </Button>
          <Button variant="danger" color="danger" onClick={handleClose}>
           Logout 
          </Button>
        </Modal.Footer>
      </Modal>
   </Container>
   
   
</div>
</>
);
}
export default Setting;