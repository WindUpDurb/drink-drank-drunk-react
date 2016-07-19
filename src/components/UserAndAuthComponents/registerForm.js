"use strict";

import React, {PropTypes} from "react";
import toast from "toastr";


const RegisterForm = ({onChange, onSave, newRegistration})  => {
        return (
            <div className="formFormat">
                <div className="text-center container">
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-2">
                            <h3 className="greyText">Register</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-2">
                            <form>
                                <div className="form-group label-static">
                                    <label className="control-label">What is your first name?</label>
                                    <input
                                        name="firstName"
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name"
                                        value={newRegistration.firstName || ""}
                                        onChange={onChange}
                                        required/>
                                </div>

                                <div className="form-group label-static">
                                    <label className="control-label">What is your last name?</label>
                                    <input
                                        name="lastName"
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name"
                                        value={newRegistration.lastName || ""}
                                        onChange={onChange}
                                        required/>
                                </div>

                                <div className="form-group label-static">
                                    <label className="control-label">Enter your email address</label>
                                    <input
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={newRegistration.email || ""}
                                        onChange={onChange}
                                        required/>
                                </div>


                                <div className="form-group label-static">
                                    <label className="control-label">Create your password</label>
                                    <input
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={newRegistration.password || ""}
                                        onChange={onChange}
                                        required />
                                </div>
                                <div className="form-group label-static">
                                    <label className="control-label">Confirm your password</label>
                                    <input
                                        name="passwordConfirm"
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={newRegistration.passwordConfirm || ""}
                                        onChange={onChange}
                                        required />
                                </div>
                                <br/>
                                    <br/>
                                        <button type="button" onClick={onSave} className="btn btn-primary">Submit Registration</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
};

RegisterForm.propTypes = {
    onChange: React.PropTypes.func.isRequired,
    newRegistration: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired
};

export default RegisterForm;