"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import RegisterForm from "./registerForm";
import SubHeader from "../common/SubHeader";
import toastr from "toastr";


class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newRegistration: {}
        };

        this.updateRegistrationFormState = this.updateRegistrationFormState.bind(this);
        this.submitRegistration = this.submitRegistration.bind(this);
    }

    submitRegistration(event) {
        event.preventDefault();
        if (this.state.newRegistration.password !== this.state.newRegistration.passwordConfirm) {
            return toastr.error("Your passwords must be the same");
        }
        console.log("Here");
        console.log("New registration: ", this.state.newRegistration);
    }

    updateRegistrationFormState(event) {
        let field = event.target.name;
        let registrationForm = this.state.newRegistration;
        registrationForm[field] = event.target.value;
        this.setState({newRegistration: registrationForm});
    }

    render() {
        return (
            <div>
                <SubHeader/>
                <RegisterForm
                    onChange={this.updateRegistrationFormState}
                    onSave={this.submitRegistration}
                    newRegistration={this.state.newRegistration}/>
            </div>
        );
    }
}

RegisterPage.propTypes = {
    //newRegistration: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
       // newRegistrationForm: state.newRegistration
    };
}

export default connect(mapStateToProps)(RegisterPage);