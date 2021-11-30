import React from 'react';
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Dropdown,  OverlayTrigger, Tooltip} from "react-bootstrap";
import './Live.css';
import Live1 from '../../Images/live1.png';
import Live2 from '../../Images/live2.png';
import Live3 from '../../Images/live3.jpeg';
import Live4 from '../../Images/live4.jpeg';
import Live5 from '../../Images/live5.jpeg';
import Live6 from '../../Images/live6.jpeg';
import Button from "@restart/ui/esm/Button";
import ReactTooltip from 'react-tooltip';


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
                            <h5 className="notify-heading mb-3"><b>Live</b></h5> 
                            <section>
                            <div className="liveBox">
                                <div className="imageSection">
                                    <img src={Live1} alt={Live1}/>
                                    <div className="rate">
                                        <Button className="play-button" id="live"><i class="fas fa-play"></i> Live Now</Button>
                                        <span className="reviews">74 viewers</span>
                                    </div>
                                </div> 
                                <div className="d-flex mt-5">
                                    <div className="live-left">
                                        <div className="live-image">
                                        <img src={Live2} alt={Live2}/>
                                            </div>
                                        </div>
                                        <div className="live-right">
                                            <div className="live-content">
                                                <p><b>GTranslator_1</b>
                                                <span class="GTranslator">@GTranslator_1&nbsp; .&nbsp; 32m</span></p>
                                                </div>
                                                 <Dropdown>
                                                 <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">More</Tooltip>}>
                                                    <Dropdown.Toggle id="dropdown-basic">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                    </Dropdown.Toggle>
                                                </OverlayTrigger>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1"><i class="fas fa-user-plus plus"></i>Follow@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2"><i class="fas fa-volume-mute mute"></i>Mute@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3"><i class="fas fa-ban ban"></i>Block@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3"><i class="fas fa-flag flag"></i>Report Post</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <p className="dot"><i class="fas fa-ellipsis-h"></i></p>
                                                <div className="d-flex just align-center">
                                                    <div className="live-icon">
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip1">Reply</Tooltip>}>
                                                        <span className="h-blue"><i class="fas fa-comment-alt"></i> 1</span>
                                                    </OverlayTrigger> 
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip2">Like</Tooltip>}>
                                                        <span className="h-red" data-tip="more" data-place="bottom"><i class="fas fa-thumbs-up"></i> 26</span>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip3">Repost</Tooltip>}>
                                                        <span className="h-green" data-tip="more" data-place="bottom"><i class="fas fa-retweet"></i> 12</span>
                                                    </OverlayTrigger>
                                                        </div>
                                                        <div className="live-end">
                                                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip4">Share</Tooltip>}>
                                                            <i class="fas fa-share h-blue"></i>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                        </div>
                                </div>   
                            </div> 
                            </section>  
                            <section className="mt-5">
                            <div className="liveBox">
                                <div className="imageSection">
                                    <img src={Live2} alt={Live2}/>
                                    <div className="rate">
                                        <Button className="play-button"><i class="fas fa-play"></i> Replay</Button>
                                        <span className="reviews">74 viewers</span>
                                    </div>
                                </div> 
                                <div className="d-flex mt-5">
                                    <div className="live-left">
                                        <div className="live-image">
                                        <img src={Live3} alt={Live3}/>
                                            </div>
                                        </div>
                                        <div className="live-right">
                                            <div className="live-content">
                                                <p><b>GTranslator_1</b>
                                                <span class="GTranslator">@GTranslator_1&nbsp; .&nbsp; 32m</span></p>
                                                </div>
                                                 <Dropdown>
                                                 <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">More</Tooltip>}>
                                                    <Dropdown.Toggle id="dropdown-basic">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                    </Dropdown.Toggle>
                                                </OverlayTrigger>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1"><i class="fas fa-user-plus plus"></i>Follow@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2"><i class="fas fa-volume-mute mute"></i>Mute@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3"><i class="fas fa-ban ban"></i>Block@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3"><i class="fas fa-flag flag"></i>Report Post</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <p className="dot"><i class="fas fa-ellipsis-h"></i></p>
                                                <div className="d-flex just align-center">
                                                    <div className="live-icon">
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip1">Reply</Tooltip>}>
                                                        <span className="h-blue"><i class="fas fa-comment-alt"></i> 1</span>
                                                    </OverlayTrigger> 
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip2">Like</Tooltip>}>
                                                        <span className="h-red" data-tip="more" data-place="bottom"><i class="fas fa-thumbs-up"></i> 26</span>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip3">Repost</Tooltip>}>
                                                        <span className="h-green" data-tip="more" data-place="bottom"><i class="fas fa-retweet"></i> 12</span>
                                                    </OverlayTrigger>
                                                        </div>
                                                        <div className="live-end">
                                                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip4">Share</Tooltip>}>
                                                            <i class="fas fa-share h-blue"></i>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                        </div>
                                </div>   
                            </div> 
                            </section> 
                            <section className="mt-5">
                            <div className="liveBox">
                                <div className="imageSection">
                                    <img src={Live3} alt={Live3}/>
                                    <div className="rate">
                                        <Button className="play-button"><i class="fas fa-play"></i> Replay</Button>
                                        <span className="reviews">74 viewers</span>
                                    </div>
                                </div> 
                                <div className="d-flex mt-5">
                                    <div className="live-left">
                                        <div className="live-image">
                                        <img src={Live1} alt={Live1}/>
                                            </div>
                                        </div>
                                        <div className="live-right">
                                            <div className="live-content">
                                                <p><b>GTranslator_1</b>
                                                <span class="GTranslator">@GTranslator_1&nbsp; .&nbsp; 32m</span></p>
                                                </div>
                                                 <Dropdown>
                                                 <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">More</Tooltip>}>
                                                    <Dropdown.Toggle id="dropdown-basic">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                    </Dropdown.Toggle>
                                                </OverlayTrigger>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1"><i class="fas fa-user-plus plus"></i>Follow@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2"><i class="fas fa-volume-mute mute"></i>Mute@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3"><i class="fas fa-ban ban"></i>Block@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3"><i class="fas fa-flag flag"></i>Report Post</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>                                            
                                                <p className="share">Diamond and Silk Chit Chat Live 11-29-2021</p>
                                                <p className="share1">SHARE SHARE SHARE </p>
                                                <a href="#"  className="share3">http://MyPillow.com/TrumpWon</a>
                                                <p className="share">Promo Code: TrumpWon Save Up To 66%</p>
                                                <a href="#" className="share3">http://DiamondandSilkStore.com<span>"Trump Won Mugs"</span></a> 
                                                <div className="d-flex just align-center">
                                                    <div className="live-icon">
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip1">Reply</Tooltip>}>
                                                        <span className="h-blue"><i class="fas fa-comment-alt"></i> 1</span>
                                                    </OverlayTrigger> 
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip2">Like</Tooltip>}>
                                                        <span className="h-red" data-tip="more" data-place="bottom"><i class="fas fa-thumbs-up"></i> 26</span>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip3">Repost</Tooltip>}>
                                                        <span className="h-green" data-tip="more" data-place="bottom"><i class="fas fa-retweet"></i> 12</span>
                                                    </OverlayTrigger>
                                                        </div>
                                                        <div className="live-end">
                                                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip4">Share</Tooltip>}>
                                                            <i class="fas fa-share h-blue"></i>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                        </div>
                                </div>   
                            </div> 
                            </section> 
                            
                            <section className="mt-5">
                            <div className="liveBox">
                                <div className="imageSection">
                                    <img src={Live5} alt={Live5}/>
                                    <div className="rate">
                                        <Button className="play-button"><i class="fas fa-play"></i> Replay</Button>
                                        <span className="reviews">74 viewers</span>
                                    </div>
                                </div> 
                                <div className="d-flex mt-5">
                                    <div className="live-left">
                                        <div className="live-image">
                                        <img src={Live6} alt={Live6}/>
                                            </div>
                                        </div>
                                        <div className="live-right">
                                            <div className="live-content">
                                                <p><b>GTranslator_1</b>
                                                <span class="GTranslator">@GTranslator_1&nbsp; .&nbsp; 32m</span></p>
                                                </div>
                                                 <Dropdown>
                                                 <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">More</Tooltip>}>
                                                    <Dropdown.Toggle id="dropdown-basic">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                    </Dropdown.Toggle>
                                                </OverlayTrigger>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1"><i class="fas fa-user-plus plus"></i>Follow@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2"><i class="fas fa-volume-mute mute"></i>Mute@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3"><i class="fas fa-ban ban"></i>Block@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3"><i class="fas fa-flag flag"></i>Report Post</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <p className="dot"><i class="fas fa-ellipsis-h"></i></p>
                                                <div className="d-flex just align-center">
                                                    <div className="live-icon">
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip1">Reply</Tooltip>}>
                                                        <span className="h-blue"><i class="fas fa-comment-alt"></i> 1</span>
                                                    </OverlayTrigger> 
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip2">Like</Tooltip>}>
                                                        <span className="h-red" data-tip="more" data-place="bottom"><i class="fas fa-thumbs-up"></i> 26</span>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip3">Repost</Tooltip>}>
                                                        <span className="h-green" data-tip="more" data-place="bottom"><i class="fas fa-retweet"></i> 12</span>
                                                    </OverlayTrigger>
                                                        </div>
                                                        <div className="live-end">
                                                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip4">Share</Tooltip>}>
                                                            <i class="fas fa-share h-blue"></i>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                        </div>
                                </div>   
                            </div> 
                            </section>
                            <section className="mt-5">
                            <div className="liveBox">
                                <div className="imageSection">
                                    <img src={Live6} alt={Live6}/>
                                    <div className="rate">
                                        <Button className="play-button"><i class="fas fa-play"></i> Replay</Button>
                                        <span className="reviews">74 viewers</span>
                                    </div>
                                </div> 
                                <div className="d-flex mt-5">
                                    <div className="live-left">
                                        <div className="live-image">
                                        <img src={Live1} alt={Live1}/>
                                            </div>
                                        </div>
                                        <div className="live-right">
                                            <div className="live-content">
                                                <p><b>GTranslator_1</b>
                                                <span class="GTranslator">@GTranslator_1&nbsp; .&nbsp; 32m</span></p>
                                                </div>
                                                 <Dropdown>
                                                 <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">More</Tooltip>}>
                                                    <Dropdown.Toggle id="dropdown-basic">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                    </Dropdown.Toggle>
                                                </OverlayTrigger>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1"><i class="fas fa-user-plus plus"></i>Follow@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2"><i class="fas fa-volume-mute mute"></i>Mute@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3"><i class="fas fa-ban ban"></i>Block@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3"><i class="fas fa-flag flag"></i>Report Post</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <p className="dot"><i class="fas fa-ellipsis-h"></i></p>
                                                <div className="d-flex just align-center">
                                                    <div className="live-icon">
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip1">Reply</Tooltip>}>
                                                        <span className="h-blue"><i class="fas fa-comment-alt"></i> 1</span>
                                                    </OverlayTrigger> 
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip2">Like</Tooltip>}>
                                                        <span className="h-red" data-tip="more" data-place="bottom"><i class="fas fa-thumbs-up"></i> 26</span>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip3">Repost</Tooltip>}>
                                                        <span className="h-green" data-tip="more" data-place="bottom"><i class="fas fa-retweet"></i> 12</span>
                                                    </OverlayTrigger>
                                                        </div>
                                                        <div className="live-end">
                                                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip4">Share</Tooltip>}>
                                                            <i class="fas fa-share h-blue"></i>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                        </div>
                                </div>   
                            </div> 
                            </section> 
                            <section className="mt-5">
                            <div className="liveBox">
                                <div className="imageSection">
                                    <img src={Live4} alt={Live4}/>
                                    <div className="rate">
                                        <Button className="play-button"><i class="fas fa-play"></i> Replay</Button>
                                        <span className="reviews">74 viewers</span>
                                    </div>
                                </div> 
                                <div className="d-flex mt-5">
                                    <div className="live-left">
                                        <div className="live-image">
                                        <img src={Live5} alt={Live5}/>
                                            </div>
                                        </div>
                                        <div className="live-right">
                                            <div className="live-content">
                                                <p><b>GTranslator_1</b>
                                                <span class="GTranslator">@GTranslator_1&nbsp; .&nbsp; 32m</span></p>
                                                </div>
                                                 <Dropdown>
                                                 <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">More</Tooltip>}>
                                                    <Dropdown.Toggle id="dropdown-basic">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                    </Dropdown.Toggle>
                                                </OverlayTrigger>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1"><i class="fas fa-user-plus plus"></i>Follow@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2"><i class="fas fa-volume-mute mute"></i>Mute@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3"><i class="fas fa-ban ban"></i>Block@GTranslator_1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3"><i class="fas fa-flag flag"></i>Report Post</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <p className="dot"><i class="fas fa-ellipsis-h"></i></p>
                                                <div className="d-flex just align-center">
                                                    <div className="live-icon">
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip1">Reply</Tooltip>}>
                                                        <span className="h-blue"><i class="fas fa-comment-alt"></i> 1</span>
                                                    </OverlayTrigger> 
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip2">Like</Tooltip>}>
                                                        <span className="h-red" data-tip="more" data-place="bottom"><i class="fas fa-thumbs-up"></i> 26</span>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip3">Repost</Tooltip>}>
                                                        <span className="h-green" data-tip="more" data-place="bottom"><i class="fas fa-retweet"></i> 12</span>
                                                    </OverlayTrigger>
                                                        </div>
                                                        <div className="live-end">
                                                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip4">Share</Tooltip>}>
                                                            <i class="fas fa-share h-blue"></i>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                        </div>
                                </div>   
                            </div> 
                            </section>                                                     
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
 