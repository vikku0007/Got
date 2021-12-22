import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {Container,Input } from "reactstrap";
import './Users/News.css';
import Adver from '../Images/Ad1.jpg';
import Adver1 from '../Images/ad2.jpg';
import Adver2 from '../Images/ad3.jpg';
import Button from "@restart/ui/esm/Button";
// import InputEmoji from "react-input-emoji";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Import Swiper styles
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

import Leftbar from './Sidebar/Leftbar';
import Rightbar from './Sidebar/Rightbar';

function Home() {
    // const [text, setText] = useState("");

    // function handleOnEnter(text) {
    //     console.log("enter", text);
    // }
    return (
        <>
            <div className="mainBody">
                <Container>
                    <div class="d-flex justifycontent">
                        <div className="stickyPos">
                            <Leftbar />
                        </div>
                        <div className="contentSection">
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
                                            <i class="fas fa-smile-beam"></i> Emoji
                                            {/* <InputEmoji value={text} onChange={setText} cleanOnEnter onEnter={handleOnEnter}  placeholder="Type a message" /> */}
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
                            <div className="suggestionBox">
                                <h3 className="f18">Suggested for you</h3>
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={16}
                                    slidesPerView={3}
                                    navigation
                                    scrollbar={{ draggable: true }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                    >
                                    <SwiperSlide>
                                        <div className="cardBox">
                                            <div className="imgSection">
                                                <img src="https://media.gettr.com/group43/getter/2021/07/03/21/e5b4890b-96af-451f-4505-7876ba44d427/2e11d43c67687db34faad251d13a0e7d_144x0.jpg"/>
                                            </div>
                                            <div className="textC">
                                                <h4 className="nameTitle">John Doe</h4>
                                                <p>@johndoe</p>
                                                <Link href="" className="followBtn">Follow</Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="cardBox">
                                            <div className="imgSection">
                                                <img src="https://media.gettr.com/group43/getter/2021/07/03/21/e5b4890b-96af-451f-4505-7876ba44d427/2e11d43c67687db34faad251d13a0e7d_144x0.jpg"/>
                                            </div>
                                            <div className="textC">
                                                <h4 className="nameTitle">John Doe</h4>
                                                <p>@johndoe</p>
                                                <Link href="" className="followBtn">Follow</Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="cardBox">
                                            <div className="imgSection">
                                                <img src="https://media.gettr.com/group43/getter/2021/07/03/21/e5b4890b-96af-451f-4505-7876ba44d427/2e11d43c67687db34faad251d13a0e7d_144x0.jpg"/>
                                            </div>
                                            <div className="textC">
                                                <h4 className="nameTitle">John Doe</h4>
                                                <p>@johndoe</p>
                                                <Link href="" className="followBtn">Follow</Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="cardBox">
                                            <div className="imgSection">
                                                <img src="https://media.gettr.com/group43/getter/2021/07/03/21/e5b4890b-96af-451f-4505-7876ba44d427/2e11d43c67687db34faad251d13a0e7d_144x0.jpg"/>
                                            </div>
                                            <div className="textC">
                                                <h4 className="nameTitle">John Doe</h4>
                                                <p>@johndoe</p>
                                                <Link href="" className="followBtn">Follow</Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                   
                                    </Swiper>

                            </div>  
                            <div class="newsT">
                                <div class="like d-flex">
                                    <p class="d-flex">
                                        <span>10</span>
                                        <i class="fas fa-thumbs-up"></i>
                                    </p>
                                    <p class="d-flex">
                                        <span>5</span>
                                        <i class="fas fa-thumbs-down"></i>
                                    </p>
                                </div>
                                <h2 class="heading">Breaking News</h2>
                                <img src="/static/media/ad4.ac53680a.jpg" alt="/static/media/ad4.ac53680a.jpg" class="adver1" />
                                 <p class="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <Link to="/news" className="readMore">Read more</Link>
                            </div>  
                            <div class="newsT">
                                <div class="like d-flex">
                                    <p class="d-flex">
                                        <span>10</span>
                                        <i class="fas fa-thumbs-up"></i>
                                    </p>
                                    <p class="d-flex">
                                        <span>5</span>
                                        <i class="fas fa-thumbs-down"></i>
                                    </p>
                                </div>
                                <h2 class="heading">Breaking News</h2>
                                <img src="/static/media/ad4.ac53680a.jpg" alt="/static/media/ad4.ac53680a.jpg" class="adver1" />
                                 <p class="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <Link to="/news" className="readMore">Read more</Link>
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

export default Home;
 