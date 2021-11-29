import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import './News.css';
import Adver from '../../Images/Ad1.jpg';
import Adver1 from '../../Images/ad2.jpg';
import Adver2 from '../../Images/ad3.jpg';
import Adver3 from '../../Images/ad4.jpg';
import Button from "@restart/ui/esm/Button";


function News(){
    return (
        <>
            <div className="mainBody">
                <Container>
                    <div class="d-flex justifycontent">
                        <div className="stickyPos">
                            <ul className="userlink">
                                <li className="bNone">
                                    <Button className="createBtn"><i class="far fa-edit"></i> Create Post</Button>
                                </li>
                                <hr/>
                                <li>
                                    <Link to="" activeClassName="active"><i class="fas fa-home"></i> Home</Link>
                                </li>
                                <li>
                                    <Link to="" activeClassName="active"><i class="fas fa-bell"></i> Notifications</Link>
                                </li>
                                <li>
                                    <Link to="" activeClassName="active"><i class="fas fa-satellite-dish"></i> Live</Link>
                                </li>
                                <li className="bNone">
                                    <Link to="" activeClassName="active"><i class="fas fa-male"></i> Profile</Link>
                                </li>
                                <hr/>
                                <li>
                                    <Link to="" activeClassName="active"><i class="fas fa-cog"></i> Settings</Link>
                                </li>
                                <li>
                                    <Link to="" activeClassName="active"><i class="fas fa-question-circle"></i> Help</Link>
                                </li>
                                <li className="bNone">
                                    <Link to="" activeClassName="active"><i class="fas fa-download"></i> Download</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="contentSection">
                            <div class="like d-flex">
                                <p className="d-flex">
                                    <span>10</span>
                                    <i class="fas fa-thumbs-up"></i>
                                </p>
                                <p className="d-flex">
                                    <span>5</span>
                                    <i class="fas fa-thumbs-down"></i> 
                                </p>  
                            </div>
                                <h2 className="heading">Breaking News</h2>
                                <img src={Adver3} alt={Adver3} className="adver1" />
                                <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                
                            </div>
                        
                        <div className="stickyPos">
                            <ul className="userlink">
                                <li>
                                    <Link to="/#"><img src={Adver} alt={Adver} className="adver" /></Link>
                                </li>
                                <li>
                                    <Link to="/#"><img src={Adver1} alt={Adver1} className="adver" /></Link>
                                </li>
                                <li>
                                    <Link to="/#"><img src={Adver2} alt={Adver2} className="adver" /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}


export default News;