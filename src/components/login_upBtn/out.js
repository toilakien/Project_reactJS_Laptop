import React from "react";
import {Link}from 'react-router-dom';

function Out(){
   
    return(
        <ul id="out"  className="dntt col-8 nav">
        <li >
            <Link to='/Login' className="btn btn-warning">Thoat</Link>
        </li>&nbsp;
        
     </ul>
    )
}
export default Out;