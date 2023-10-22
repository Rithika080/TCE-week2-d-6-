import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function Signup(){
    return(
        <>
        <div className="border border-primary-subtle p-2 mb-2">
        <input type="text"  placeholder="Enter username"/>
        <br /><br />
        <input type="password" placeholder="Create password" />
        <br /><br />
        <input type="password" placeholder="Confirm password" />
        <br /><br />
        <button className="btn btn-primary mx-1">Sign Up</button>
        </div>
        </>
    )
}
export default Signup;
