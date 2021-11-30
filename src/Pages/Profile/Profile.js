import React, {useState} from 'react';
import { Container ,Input} from "reactstrap";
import { Modal,Form } from "react-bootstrap";
import './Profile.css';
import Button from "@restart/ui/esm/Button";
import { Tab, Tabs, TabList, TabPanel, } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Leftbar from '../Sidebar/Leftbar';
import Rightbar from '../Sidebar/Rightbar';
function Profile() {
const [show, setShow] = useState(false);
const [show1, setShow1] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const handleClose1 = () => setShow1(false);
const handleShow1 = () => setShow1(true);
return (
<>
<div className="mainBody">
   <Container>
      <div className="d-flex justifycontent">
         <div className="stickyPos">
            <Leftbar />
         </div>
         <div className="contentSection">
            Shreya00007  
            <div className="main-profile">
               <div className="main-profile2"></div>
               <div className="jss1641">
                  <div className="jss1642">
                     <div className="MuiAvatar-root MuiAvatar-circular jss190 jss1721 jss1643 MuiAvatar-colorDefault">
                     </div>
                     <div></div>
                  </div>
                  <div className="jss1644 proEdit ">
                     <Button variant="primary" onClick={handleShow}>
                     Edit Profile
                     </Button>
                  </div>
                  <div className="jss1670">
                     <p className="jss1647" title="Shreya00007">Shreya00007</p>
                  </div>
                  <p className="jss1648">@Shreya00007</p>
                  <div className="jss1649">
                     <div className="jss1650"></div>
                     <div className="jss1656">
                        <div className="subItem">
                           {/* 
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="jss1661">
                              <path d="M9.3 3V4.8H14.7V3H16.5V4.8H20.1C20.3387 4.8 20.5676 4.89482 20.7364 5.0636C20.9052 5.23239 21 5.46131 21 5.7V20.1C21 20.3387 20.9052 20.5676 20.7364 20.7364C20.5676 20.9052 20.3387 21 20.1 21H3.9C3.66131 21 3.43239 20.9052 3.2636 20.7364C3.09482 20.5676 3 20.3387 3 20.1V5.7C3 5.46131 3.09482 5.23239 3.2636 5.0636C3.43239 4.89482 3.66131 4.8 3.9 4.8H7.5V3H9.3ZM19.2 9.3H4.8V19.2H19.2V9.3ZM14.0961 11.8588C14.4475 11.5074 15.0173 11.5073 15.3687 11.8587C15.7201 12.2101 15.7201 12.7799 15.3687 13.1313L11.55 16.95L9.00473 14.4047C8.65292 14.0529 8.65312 13.4825 9.00518 13.1309C9.35693 12.7797 9.9268 12.7799 10.2782 13.1315L11.5509 14.4048L14.0961 11.8588Z" fill="currentColor"></path>
                           </svg>
                           */}
                           Joined<span className="jss1662">November 2021</span>
                        </div>
                     </div>
                     <div className="jss1652"><a className="jss1654" to="/user/shreya00007/following"><span className="jss1653">0</span><span className="jss1655 jss1651">Following</span></a><a className="jss1654" to="/user/shreya00007/followers"><span className="jss1653">0</span><span className="jss1655 jss1651">Followers</span></a></div>
                  </div>
               </div>
            </div>
            <div className="tab-profile"   >
               <Tabs className="customtabs">
                  <TabList>
                     <Tab>Posts</Tab>
                     <Tab>Replies</Tab>
                     <Tab>Media</Tab>
                     <Tab>Likes</Tab>
                  </TabList>
                  <TabPanel>
                     <div className="tab-text text-center">
                        <h6><b>You haven't posted anything yet</b></h6>
                        <p>when you post with photos and videos,you'll see them here</p>
                        <Button variant="primary" onClick={handleShow1}>
                Create your first post
                        </Button>
                     </div>
                  </TabPanel>
                  <TabPanel>
                     <div className="tab-text text-center">
                        <h6><b>You haven't replied yet</b></h6>
                        <p>when you do, you'll see your replies here</p>
                        <Button variant="primary" onClick={handleShow1}>
                Create your first post
                        </Button>
                     </div>
                  </TabPanel>
                  <TabPanel>
                     <div className="tab-text text-center">
                        <h6><b>You haven't posted any media yet</b></h6>
                        <p>when you do, you'll see your media here</p>
                        <Button variant="primary" onClick={handleShow1}>
                Create your first post
                        </Button>
                     </div>
                  </TabPanel>
                  <TabPanel>
                     <div className="tab-text text-center">
                        <h6><b>You haven't liked anything yet</b></h6>
                        <p>when you do, you'll see your likes here</p>
                        <Button variant="primary" onClick={handleShow1}>
                Create your first post
                        </Button>
                     </div>
                  </TabPanel>
               </Tabs>
            </div>
         </div>
         <div className="stickyPos">
            <Rightbar />
         </div>
      </div>
      <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <div className="imageBody">
               <i className="fas fa-camera bvb"></i>
                  <Form.Floating className="mb-3 myInputF">
                     <Form.Control
                        id="floatingInputCustom"
                        type="file"
                        placeholder="name@example.com"
                        />
                     {/* <label htmlFor="floatingInputCustom">Email address</label> */}
                  </Form.Floating>
            </div>
            <div className="avtr">
               <div className="akss">
                  <i className="fas fa-camera"></i>
                  <Form.Floating className="mb-3 myInputF">
                     <Form.Control
                        id="floatingInputCustom"
                        type="file"
                        placeholder="name@example.com"
                        />
                     {/* <label htmlFor="floatingInputCustom">Email address</label> */}
                  </Form.Floating>
               </div>
            </div>
            <Form.Floating className="mb-3">
               <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  placeholder="Display Name"
                  />
               {/* <label htmlFor="floatingInputCustom">Email address</label> */}
            </Form.Floating>
            <Form.Floating className="mb-3">
               <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  placeholder="Bio"
                  />
               {/* <label htmlFor="floatingInputCustom">Email address</label> */}
            </Form.Floating>
            <Form.Floating className="mb-3">
               <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="Location"
                  />
               {/* <label htmlFor="floatingInputCustom">Email address</label> */}
            </Form.Floating>
            <Form.Floating>
               <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  placeholder="Website"
                  />
               {/* <label htmlFor="floatingPasswordCustom">Password</label> */}
            </Form.Floating>
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
      {/* Second Modal */}
      <Modal show={show1} onHide={handleClose1}>
         <Modal.Header closeButton>
            <Modal.Title>Create Post  </Modal.Title>
         </Modal.Header>
         <div className="postBox mb-5">
            <div className="textBox">
               <Input id="exampleText" name="text" type="textarea" className="form-control" rows="4" placeholder="What's New?"/>
            </div>
            <div className="d-flex justify-content">
               <div className="d-flex alings-center">
                  <div className="filesI mt-3">
                     <i class="far fa-image"></i> Media
                     <Input id="exampleFile" name="file" type="file"/>
                  </div>
                  <div className="emg mt-3 mr-3 ml-3">
                     <i class="fas fa-smile-beam"></i> Emogi
                  </div>
                  <div className="gifs mt-3">
                     <i class="fas fa-robot"></i> Gif
                  </div>
               </div>
               <div className="buttonSection mt-3">
                  <Button className="postBtn">Post</Button>
               </div>
            </div>
         </div>
         <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
            Close
            </Button>
            <Button variant="primary" onClick={handleClose1}>
            Save Changes
            </Button>
         </Modal.Footer>
      </Modal>
   </Container>
</div>
</>
);
}
export default Profile;