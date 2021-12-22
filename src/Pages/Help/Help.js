import React, {useState} from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import {Accordion} from "react-bootstrap";
import './Help.css';
import Leftbar from '../Sidebar/Leftbar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';


function Help() {
const [value, setValue] = React.useState('1');
const handleChange = (event, newValue) => {
setValue(newValue);
};
return (
<>
<div className="mainBody">
   <Container>
      <div class="d-flex">
         <div className="stickyPos">
            <Leftbar />
         </div>
         <div className="contentSection" id="conSe">
            <Tabs className="verticalTabs">
               <Row>
                  <Col md={6} xs={12}>
                  <h5 className="notify-heading mb-5"><b>Help</b></h5>
                  <TabList>
                    <h5 className="notify-heading mb-3"><b>Popular Topics</b></h5>
                     <Tab>Registration</Tab>
                     <Tab>Post/Repost/Reply</Tab>
                     <Tab>Share</Tab>
                     <h5 className="notify-heading mt-3"><b>Rules and policies</b></h5>
                     <Tab>Privacy Policy</Tab>
                     <Tab>Term of use</Tab>                     
                  </TabList>
                  </Col>
                  <Col md={6} xs={12}>
                  
                  <TabPanel>
                    <h5 className="notify-heading mb-3"><b>Registration</b></h5>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Forgot my password <i class="fas fa-angle-up"></i></Accordion.Header>
                            <Accordion.Body>
                            <p>1. Tap "Forgot password?"</p>
                            <p>2. Enter your account’s email address.</p>
                            <p>3. Check your email to reset your password.</p>
                            </Accordion.Body>
                        </Accordion.Item>  
                    </Accordion>
                  </TabPanel>
                  <TabPanel>
                    <h5 className="notify-heading mb-3"><b>Post/Repost/Reply</b></h5>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How do i setup my profile?<i class="fas fa-angle-up"></i></Accordion.Header>
                            <Accordion.Body>
                            <p className="mt-2 mb-3">Open your GOT app (iOS or Android)</p>
                            <p>1. Go to Account</p>
                            <p>2. Tap "Edit Profile".</p>
                            <p>3. Tap into any of these areas to make the appropriate changes.</p>
                            <p>4. Tap "Save"</p>
                            <p className="mt-2 mb-3"><b>Note:</b></p>
                            <p>Profile photos must be at least 20x20 pixels to upload (recommended dimensions are 400x400 pixels).
                                Header photo, also known as a "banner" (recommended dimensions are 1500x500 pixels).
                                Bio (maximum 160 characters)
                                To change a profile photo or a header photo, click or tap the camera icon and select Upload Photo or Remove.</p>
                            </Accordion.Body>
                        </Accordion.Item>  
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How do i change my language prefrence<i class="fas fa-angle-up"></i></Accordion.Header>
                            <Accordion.Body>
                            <p className="mt-2 mb-3">You can change the display language on GOT anytime.</p>
                            <p className="mt-2 mb-3">To change language preferences:</p>
                            <p>1. Go to Account</p>
                            <p>2. Tap "Settings"</p>
                            <p>3. Tap "Languages"</p>
                            <p>4. Select your preferred language from the list</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>                    
                  </TabPanel>
                  <TabPanel>
                    <h5 className="notify-heading mb-3"><b>Share</b></h5>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How do i post on GOT?<i class="fas fa-angle-up"></i></Accordion.Header>
                            <Accordion.Body>
                            <p className="mt-2">1. Enter your Post (up to 777 characters) into the compose box</p>
                            <p>2. You can include up to 6 photos, a GIF, or a video in your Post</p>
                            <p>3. Post to your profile</p>
                            </Accordion.Body>
                        </Accordion.Item>  
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How do i like/unlike a post?<i class="fas fa-angle-up"></i></Accordion.Header>
                            <Accordion.Body>
                            <p className="mt-2 mb-3">To like a Post:</p>
                            <p>1. Tap the thumb-ups icon below the Post</p>
                            <p className="mt-2">Note:</p>
                            <p>The thumb-ups icon will change from white to red for the liked post To undo the like, tap the thumb-ups icon again and it will turn back to white
                                Tap the thumb-ups icon again to undo a like and the thumb-ups will turn to white.</p>                            
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion> 
                     <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Reply to a post<i class="fas fa-angle-up"></i></Accordion.Header>
                            <Accordion.Body>
                            <p className="mt-2 mb-3">1. Go to the Post</p>
                            <p>2. Tap the “Reply” icon below the post.</p>
                            <p>3. In the "Replying to" field, enter a reply</p>
                            <p>3. Tap into any of these areas to make the appropriate changes.</p>
                            <p>4. Tap "Reply"</p>
                            </Accordion.Body>
                        </Accordion.Item>  
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Sharing<i class="fas fa-angle-up"></i></Accordion.Header>
                            <Accordion.Body>
                            <p className="mt-2 mb-3">To share a Post:</p>
                            <p className="mt-2 mb-3">1. Go to the Post</p>
                            <p>2. Tap "Share"</p>
                            <p>3. Select the method you would like to use and follow the instructions.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How do i search<i class="fas fa-angle-up"></i></Accordion.Header>
                            <Accordion.Body>
                            <p className="mt-2 mb-3">To search specific hashtags or people:</p>
                            <p className="mt-2 mb-3">1. Tap "Search"</p>
                            <p>2. Search for @Usernames and #Hashtags</p>
                            <p>3. Search results will be shown in the top tab</p>
                            <p>4. Explore other search tabs for related contents</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How do i follow/unfollow someone<i class="fas fa-angle-up"></i></Accordion.Header>
                            <Accordion.Body>
                            <p className="mt-2 mb-3">To follow an account:</p>
                            <p className="mt-2 mb-3">1. Go to the account profile page and tap "Follow" To unfollow an account:</p>
                            <p>1. Go to the account profile page and tap "Following"</p>
                            <p>2. Confirm your action by tapping "Unfollow"</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>How do i block account<i class="fas fa-angle-up"></i></Accordion.Header>
                            <Accordion.Body>
                            <p className="mt-2 mb-3">Blocking accounts disables them from viewing your Posts or engaging with you through direct messages, replies, follows or likes.</p>
                            <p className="mt-2 mb-3">How to block an account:</p>
                            <p>1. Go to the account profile page or tap one of its posts.</p>
                            <p>2. Tap the "…" icon located in the top right corner</p>
                            <p>3. Tap "Block @Username" and tap "Block" to confirm.</p>
                            <p className="mt-2">How to unblock an account:</p>
                            <p className="mt-2">1. Go to Settings</p>
                            <p>2. Tap "Privacy</p>
                            <p>3. Tap "Unblock"</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>How do i mute an account<i class="fas fa-angle-up"></i></Accordion.Header>
                            <Accordion.Body>
                            <p className="mt-2 mb-3">How to mute an account:</p>
                            <p className="mt-2 mb-3">How to mute a user:</p>
                            <p>1. Go to the account profile page or tap one of its posts.</p>
                            <p>2. Tap the "…" icon located in the top right corner.</p>
                            <p>3. Tap "Mute @Username" and tap "Mute" to confirm</p>
                            <p className="mt-2">How to unmute an account:</p>
                            <p className="mt-2">1. Go to Settings</p>
                            <p>2. Tap "Privacy"</p>
                            <p>3. Tap "Unmute"</p>
                            </Accordion.Body>
                        </Accordion.Item>
                         </Accordion> 
                  </TabPanel>
                  <TabPanel>
                      <div className="privacyTabs">
                    <h5 className="notify-heading mb-3"><b>Privacy Policy</b></h5>
                    <h3 className="gtr mt-5">GOT PRIVACY POLICY</h3>
                    <p className="kmmm mt-3">Effective Date: September 25, 2021</p>
                    <h4 className="gtr mt-5">1. WELCOME</h4>
                    <p className="kmmm mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <h4 className="gtr mt-5">2. INFORMATION WE COLLECT</h4>
                    <h5 className="gtr mt-5">A. Information You Provide</h5>
                    <p className="kmmm mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <h5 className="notify-heading mb-3"><b>Terms Of Use</b></h5>
                    <p className="km mt-3">GOT -- TERMS OF USE</p>
                    <p className="kmm mt-3">Effective Date and Last Updated: September 25, 2021</p>
                    <p className="kmmm mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                  </TabPanel>
                  </Col>
               </Row>
            </Tabs>
         </div>
      </div>
     
   </Container>
   
   
</div>
</>
);
}
export default Help;
