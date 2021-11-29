import React from 'react';
import { Container, Nav, NavItem, NavLink, Row, Col, Card, CardTitle, CardText, Button, TabContent, TabPane } from "reactstrap";
import './Notification.css';

import Leftbar from '../Sidebar/Leftbar';
import Rightbar from '../Sidebar/Rightbar';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Notification() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className="mainBody">
                <Container>
                    <div class="d-flex justifycontent">
                        <div className="stickyPos">
                            <Leftbar />
                        </div>
                        <div className="contentSection">
                            <h5 className="notify-heading mb-5"><b>Notification</b></h5>
                            <Tabs className="customtabs">
                                <TabList>
                                <Tab>All</Tab>
                                <Tab>Mention</Tab>
                                </TabList>
                                <TabPanel>
                                <div className="notify-content text-center">
                                <h6>Nothing to see yet</h6>
                                <p>When someone interacts with you, you'll find it here</p>
                                </div>
                                </TabPanel>                                
                                <TabPanel>
                                <div className="notify-content text-center">
                                <h6>Nothing to see yet</h6>
                                <p>When someone mention you, you'll find it here</p>
                                </div>
                                </TabPanel>        
                             </Tabs>                
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

export default Notification;