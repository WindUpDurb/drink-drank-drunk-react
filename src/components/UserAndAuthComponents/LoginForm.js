"use strict";

import React, {PropTypes} from "react";
import GoogleLogin from 'react-google-login';


const LoginForm = ({onChange, onSubmit, loginForm}) => {
    console.log("environment variable: ", process.env)
    return (
        <div className="row">
            <div className="col-sm-6 ">
                <form>
                    <div className="form-group label-static">
                        <label className="control-label">Login with you email address</label>
                        <input
                            name="email"
                            value={loginForm.email || ""}
                            onChange={onChange}
                            type="email"
                            className="form-control"
                            placeholder="Email" />
                    </div>

                    <div className="form-group label-static">
                        <label className="control-label">Enter your password</label>
                        <input
                            name="password"
                            value={loginForm.password || ""}
                            onChange={onChange}
                            type="password"
                            className="form-control"
                            placeholder="Password" />
                    </div>
                    <br/>
                    <br/>
                    <button onClick={onSubmit} className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
};

LoginForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    loginForm: PropTypes.object.isRequired
};

export default LoginForm;