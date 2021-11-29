import React from 'react';
import { Link } from "react-router-dom";
import { Container} from "reactstrap";
import './Live.css';
import Live1 from '../../Images/live1.png';
import Live2 from '../../Images/live2.png';
import Live3 from '../../Images/live3.jpeg';
import live4 from '../../Images/live4.jpeg';
import Live5 from '../../Images/live5.jpeg';
import Live6 from '../../Images/live6.jpeg';
import Button from "@restart/ui/esm/Button";



import Leftbar from '../Sidebar/Leftbar';
import Rightbar from '../Sidebar/Rightbar';

function Live() {
    return (
        <>
            <div className="mainBody">
                <Container>
                    <div class="d-flex justifycontent">
                        <div className="stickyPos">
                            <Leftbar />
                        </div>
                        <div className="contentSection">                      
                            <h5 className="notify-heading mb-5"><b>Live</b></h5>  
                            <div className="liveBox">
                                <div className="imageSection">
                                    <img src={Live1} alt={Live1}/>
                                    <div className="rate">
                                        <Button className="play-button"><i class="fas fa-play"></i> Replay</Button>
                                        <span className="reviews">74 viewers</span>
                                    </div>
                                </div> 
                                <div className="d-flex mt-5">
                                    
                                </div>   
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

export default Live;
 