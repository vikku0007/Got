import React from 'react';
import {  Button, Container, Form, FormGroup, Input, Row, Col } from 'reactstrap';
import { Accordion } from "react-bootstrap";
import './Userprofile.css';
import profileImage from '../../Images/profileImage.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";



const Userpro = () => {

   

    return (
        <>
            <div className="mt-5 mb-5">
                <Container>
                     <Row>
                         <Col md={6} xs={12}>
                             <img src={profileImage} alt={profileImage} className="img-responsive w-100 userP" />
                         </Col>
                         <Col md={6} xs={12}>
                            <Tabs>
                                <TabList>
                                <Tab>Bio</Tab>
                                <Tab>Personal Information</Tab>
                                <Tab>Change Password</Tab>
                                </TabList>

                                <TabPanel>
                                <h2>Bio</h2>
                                <hr/>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    </p>
                                </TabPanel>
                                <TabPanel>
                                <h2>Personal Information</h2>
                                <hr/>
                                <div className="d-flex">
                                    <p><i class="far fa-user"></i> : </p>&nbsp;&nbsp;
                                    <p>Lorem User</p>
                                </div>
                                <div className="d-flex">
                                    <p><i class="far fa-envelope"></i> : </p>&nbsp;&nbsp;
                                    <p>example125@gmail.com</p>
                                </div>
                                <div className="d-flex">
                                    <p><i class="fas fa-mobile-alt"></i> : </p>&nbsp;&nbsp;
                                    <p>+91 7858963254</p>
                                </div>
                                <div className="d-flex">
                                    <p><i class="fas fa-map-marked-alt"></i> : </p>&nbsp;&nbsp;
                                    <p>H No. 165/A, Street 16, Sector 25, Delhi 110054</p>
                                </div>
                                </TabPanel>
                                <TabPanel>
                                <h2>Change Password</h2>
                                <hr/>
                                <Form>
                                    <FormGroup floating>
                                        <Input id="password" name="password" placeholder="Password" type="password"></Input>
                                    </FormGroup>
                                    <FormGroup floating>
                                        <Input id="cpassword" name="confirmpassword" placeholder="Confirm Password" type="password"></Input>
                                    </FormGroup>
                                    <FormGroup floating>
                                        <Button color="success">Save Changes</Button>
                                    </FormGroup>
                                </Form>
                                </TabPanel>
                            </Tabs>
                         </Col>
                     </Row>
                     <Row>
                         <Col md={12} xs={12}>
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
                                est laborum.
                                </p>
                                <Link to="/news" className="rdmore">Read More</Link>
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
                                est laborum.
                                </p>
                                <Link to="/news" className="rdmore">Read More</Link>
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                         </Col>
                     </Row>
                </Container>
            </div>
        </>
    );
} 

export default Userpro;