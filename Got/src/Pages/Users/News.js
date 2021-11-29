import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import './News.css';
import Adver from '../../Images/Ad1.jpg';
import Adver1 from '../../Images/ad2.jpg';
import Adver2 from '../../Images/ad3.jpg';
import Adver3 from '../../Images/ad4.jpg';


function News(){
    return (
        <>
            <Container>
                <Row>
                    <Col md={3} xs={12}>
                        <ul className="userlink">
                            <li>
                                <Link to="/#">User Link One</Link>
                            </li>
                            <li>
                                <Link to="/#">User Link Two</Link>
                            </li>
                            <li>
                                <Link to="/#">User Link Three</Link>
                            </li>
                            <li>
                                <Link to="/#">User Link Four</Link>
                            </li>
                            <li>
                                <Link to="/#">User Link Five</Link>
                            </li>
                            <li>
                                <Link to="/#">User Link Six</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6} xs={12}>
                        <div className="scrolable">
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
                    </Col>
                    <Col md={3} xs={12}>
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
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default News;