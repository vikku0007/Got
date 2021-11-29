import React from 'react';
import {  Button, Container } from 'reactstrap';
import './Pages.css';
import Userprofile from '../Images/userProfile.svg';
import User from '../Images/user.svg';
import Lock from '../Images/lock.svg';
import { Link } from "react-router-dom";




const Login = () => {

   

    return (
        <>
            <div className="bgPage">
                <div className="mt-5 mb-5">
                    <Container>
                        <div className="loginSection">
                            <div className="d-flex justfyContent">
                                <div className="loginLayer">
                                    <h3>Login</h3>
                                    <p>In publicing and graphics design, Lorem ipsum is a placeholder text commonly used to demostrate the visual form of a documents or a typeface without relying on meaningfull content.</p>
                                </div>
                                <div className="l">
                                    <form>
                                        <div className="form-group text-center">
                                            <img src={Userprofile} alt={Userprofile} />
                                        </div>
                                        <div className="form-group">
                                            <div className="inField">
                                                <img src={User} alt={User} className="iconF" />
                                                <input type="text" className="form-control" placeholder="Email address" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="inField">
                                                <img src={Lock} alt={Lock} className="iconF" />
                                                <input type="password" className="form-control" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <Link to="/" className="text-red">Forgot Password</Link>
                                        </div>
                                        <div className="form-group text-center">
                                            <Button className="myBtn">Login</Button>
                                        </div>
                                        <div className="form-group text-center">
                                            <Link to="/" className="clWhite">Create Account</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
} 

export default Login;