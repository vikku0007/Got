import React from 'react';
import { Container, Nav, NavItem, NavLink, Row, Col, Card, CardTitle, CardText, Button, TabContent, TabPane } from "reactstrap";
import './Notification.css';

import Leftbar from '../Sidebar/Leftbar';
import Rightbar from '../Sidebar/Rightbar';


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