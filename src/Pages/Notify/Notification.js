import React from 'react';
import { Container, Nav, NavItem, NavLink, Row, Col, Card, CardTitle, CardText, Button, TabContent, TabPane } from "reactstrap";
import './Notification.css';

import Leftbar from '../Sidebar/Leftbar';
import Rightbar from '../Sidebar/Rightbar';

import Box from '@mui/material/Box';
import Tab from '@material-ui/core/Tab';
import { TabContext } from '@material-ui/lab';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

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
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="Item One" value="1" />
                                        <Tab label="Item Two" value="2" />
                                        <Tab label="Item Three" value="3" />
                                    </TabList>
                                    </Box>
                                    <TabPanel value="1">Item One</TabPanel>
                                    <TabPanel value="2">Item Two</TabPanel>
                                    <TabPanel value="3">Item Three</TabPanel>
                                </TabContext>
                            </Box>                 
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