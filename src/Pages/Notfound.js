import React from 'react';
// import {  } from 'reactstrap';
import './Pages.css';
import Notfoundimg from '../Images/notfound.gif';

function Notfound() {
    return (
        <>
            <div className="notS"><img src={Notfoundimg} alt={Notfoundimg} className="notFoundimg" /></div>
        </>
    );
}

export default Notfound;