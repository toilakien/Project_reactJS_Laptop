import React from "react";
import {Link}from 'react-router-dom';

function BtnLog(){
   
    return(
        <ul id="none" className="dntt col-8 nav">
        <li >
            <Link to='/Login' className="btn btn-warning">Đăng nhập</Link>
        </li>&nbsp;
        <li>
            <Link to='/Logup' className="btn btn-warning">Đăng kí</Link>
        </li>
     </ul>
    )
}
export default BtnLog;