import React from 'react';
import { Link } from "react-router-dom";
// import './Users/News.css';
import Button from "@restart/ui/esm/Button";
// import InputEmoji from "react-input-emoji";

function Rightbar() {
    // const [text, setText] = useState("");

    // function handleOnEnter(text) {
    //     console.log("enter", text);
    // }
    return (
        <>
           <div className="rightBox">
                                <h3 className="font20 text-center pt-1 pb-1">GoT News</h3>
                                <hr/>
                                <img src="https://c.tenor.com/qVGPadGbVvMAAAAC/britain-flag.gif" class="jss958" alt="img" draggable="false" /> 
                                <div className="newsPost">
                                    <Link to="">
                                        <h4 className="font14">Tickets on Sale for GETTR's EXCLUSIVE London 'Counter Conference'</h4>
                                        <p className="font12">Ft. Nigel Farage, Laurence Fox, Jason Miller, Raheem Kassam, etc. </p>
                                    </Link>
                                </div>   
                                <div className="newsPost">
                                    <Link to="">
                                        <h4 className="font14">Tickets on Sale for GETTR's EXCLUSIVE London 'Counter Conference'</h4>
                                        <p className="font12">Ft. Nigel Farage, Laurence Fox, Jason Miller, Raheem Kassam, etc. </p>
                                    </Link>
                                </div> 
                                <div className="newsPost">
                                    <Link to="">
                                        <h4 className="font14">Tickets on Sale for GETTR's EXCLUSIVE London 'Counter Conference'</h4>
                                        <p className="font12">Ft. Nigel Farage, Laurence Fox, Jason Miller, Raheem Kassam, etc. </p>
                                    </Link>
                                </div> 
                                <div className="newsPost">
                                    <Link to="">
                                        <h4 className="font14">Tickets on Sale for GETTR's EXCLUSIVE London 'Counter Conference'</h4>
                                        <p className="font12">Ft. Nigel Farage, Laurence Fox, Jason Miller, Raheem Kassam, etc. </p>
                                    </Link>
                                </div>   
                                <div className="newsPost">
                                    <Link to="">
                                        <h4 className="font14">Tickets on Sale for GETTR's EXCLUSIVE London 'Counter Conference'</h4>
                                        <p className="font12">Ft. Nigel Farage, Laurence Fox, Jason Miller, Raheem Kassam, etc. </p>
                                    </Link>
                                </div> 
                                <div className="newsPost">
                                    <Link to="">
                                        <h4 className="font14">Tickets on Sale for GETTR's EXCLUSIVE London 'Counter Conference'</h4>
                                        <p className="font12">Ft. Nigel Farage, Laurence Fox, Jason Miller, Raheem Kassam, etc. </p>
                                    </Link>
                                </div>                           
                            </div>
           
        </>
    );
}

export default Rightbar;