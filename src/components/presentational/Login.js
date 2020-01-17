import React,{Fragment} from "react";

import "../../assets/css/presentational/LoginView.css"

const LoginView = () =>{
    return(
        <Fragment>
            <div id="ctr-form">
                <h6>Login</h6>
                <form action="" id="form_exe">
                        <input className="fields" type="email" name="email" id="email" placeholder="email*" required/><br/>
                        <input className="fields" type="password" name="password" id="password" placeholder="password*" required/>
                        <input className="btn-log"type="button" value="Log in"/>
                </form>
            </div>
        </Fragment>
    );
};
export default LoginView;