import React from 'react';
import { Link } from "react-router-dom";
// import './Users/News.css';
import Button from "@restart/ui/esm/Button";
// import InputEmoji from "react-input-emoji";

function Leftbar() {
    // const [text, setText] = useState("");

    // function handleOnEnter(text) {
    //     console.log("enter", text);
    // }
    return (
        <>
           <ul className="userlink">
                                <li className="bNone">
                                    <Button className="createBtn"><i class="far fa-edit"></i> Create Post</Button>
                                </li>
                                <hr/>
                                <li>
                                    <Link to="/" activeClassName="active"><i class="fas fa-home"></i> Home</Link>
                                </li>
                                <li>
                                    <Link to="/notification" activeClassName="active"><i class="fas fa-bell"></i> Notifications</Link>
                                </li>
                                <li>
                                    <Link to="/live" activeClassName="active"><i class="fas fa-satellite-dish"></i> Live</Link>
                                </li>
                                <li className="bNone">
                                    <Link to="/profile" activeClassName="active"><i class="fas fa-male"></i> Profile</Link>
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
           
        </>
    );
}

export default Leftbar;