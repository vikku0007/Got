import React from 'react';
import { Container } from "reactstrap";
import './Profile.css';
import Button from "@restart/ui/esm/Button";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Form, FormGroup, Input} from 'reactstrap';


import Leftbar from '../Sidebar/Leftbar';
import Rightbar from '../Sidebar/Rightbar';

function Profile() {
    // const [text, setText] = useState("");

    // function handleOnEnter(text) {
    //     console.log("enter", text);
    // }
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
            {/* <svg width="142" height="142" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M4 71C4 33.9969 33.9969 4 71 4C108.003 4 138 33.9969 138 71C138 108.003 108.003 138 71 138C33.9969 138 4 108.003 4 71Z" fill="#EEEFF3"></path>
               <path fill-rule="evenodd" clip-rule="evenodd" d="M71.9054 90.9189C84.4064 90.9189 94.5405 80.7848 94.5405 68.2838C94.5405 55.7827 84.4064 45.6487 71.9054 45.6487C59.4043 45.6487 49.2702 55.7827 49.2702 68.2838C49.2702 80.7848 59.4043 90.9189 71.9054 90.9189ZM71.9054 183.27C97.4076 183.27 118.081 162.597 118.081 137.095C118.081 111.592 97.4076 90.9189 71.9054 90.9189C46.4033 90.9189 25.7298 111.592 25.7298 137.095C25.7298 162.597 46.4033 183.27 71.9054 183.27Z" fill="#DFE1EA"></path>
            </svg> */}
         </div>
         <div></div>
      </div>
      <div className="jss1644"><button className="MuiButtonBase-root MuiButton-root MuiButton-outlined jss150 jss1731 MuiButton-outlinedPrimary" tabindex="0" type="button"><span className="MuiButton-label">Edit Profile</span></button></div>
      <div className="jss1670">
         <p className="jss1647" title="Shreya00007">Shreya00007</p>
      </div>
      <p className="jss1648">@Shreya00007</p>
      <div className="jss1649">
         <div className="jss1650"></div>
         <div className="jss1656">
            <div className="subItem">
               {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="jss1661">
                  <path d="M9.3 3V4.8H14.7V3H16.5V4.8H20.1C20.3387 4.8 20.5676 4.89482 20.7364 5.0636C20.9052 5.23239 21 5.46131 21 5.7V20.1C21 20.3387 20.9052 20.5676 20.7364 20.7364C20.5676 20.9052 20.3387 21 20.1 21H3.9C3.66131 21 3.43239 20.9052 3.2636 20.7364C3.09482 20.5676 3 20.3387 3 20.1V5.7C3 5.46131 3.09482 5.23239 3.2636 5.0636C3.43239 4.89482 3.66131 4.8 3.9 4.8H7.5V3H9.3ZM19.2 9.3H4.8V19.2H19.2V9.3ZM14.0961 11.8588C14.4475 11.5074 15.0173 11.5073 15.3687 11.8587C15.7201 12.2101 15.7201 12.7799 15.3687 13.1313L11.55 16.95L9.00473 14.4047C8.65292 14.0529 8.65312 13.4825 9.00518 13.1309C9.35693 12.7797 9.9268 12.7799 10.2782 13.1315L11.5509 14.4048L14.0961 11.8588Z" fill="currentColor"></path>
               </svg> */}
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
                               <a to ="#">Create your first post</a>
                               </div>
                                </TabPanel>
                                <TabPanel>
                                <div className="tab-text text-center">
                               <h6><b>You haven't replied yet</b></h6>
                               <p>when you do, you'll see your replies here</p>
                               <a to ="#">Create your first post</a>
                               </div>
                                </TabPanel>
                                <TabPanel>
                                <div className="tab-text text-center">
                               <h6><b>You haven't posted any media yet</b></h6>
                               <p>when you do, you'll see your media here</p>
                               <a to ="#">Create your first post</a>
                               </div>
                                </TabPanel>
                                <TabPanel>
                                <div className="tab-text text-center">
                               <h6><b>You haven't liked anything yet</b></h6>
                               <p>when you do, you'll see your likes here</p>
                               <a to ="#">Create your first post</a>
                               </div>
                                </TabPanel>
                            </Tabs>
                            </div>
                        </div>
                        
   

                        
                        <div className="stickyPos">
                            <Rightbar />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Profile;
 