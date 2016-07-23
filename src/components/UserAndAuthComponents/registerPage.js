// "use strict";
//
// import React, {PropTypes} from "react";
// import {connect} from "react-redux";
// import {bindActionCreators} from "redux";
// import {browserHistory} from "react-router";
// import RegisterForm from "./registerForm";
// import SubHeader from "../common/SubHeader";
// import * as UserActions from "../../actions/UserActions";
// import toastr from "toastr";
//
//
// class RegisterPage extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             newRegistration: {}
//         };
//
//         this.updateRegistrationFormState = this.updateRegistrationFormState.bind(this);
//         this.submitRegistration = this.submitRegistration.bind(this);
//     }
//
//     submitRegistration(event) {
//         event.preventDefault();
//         if (this.state.newRegistration.password !== this.state.newRegistration.passwordConfirm) {
//             return toastr.error("Your passwords must be the same");
//         }
//         this.props.UserActions.submitRegistrationForm(this.state.newRegistration)
//             .then(response => {
//                 browserHistory.push("/");
//                 toastr.info("Registration Successful. You can now login.");
//             })
//             .catch(error => {
//                 toastr.error("It seems like there was an error");
//             });
//     }
//
//     updateRegistrationFormState(event) {
//         let field = event.target.name;
//         let registrationForm = this.state.newRegistration;
//         registrationForm[field] = event.target.value;
//         this.setState({newRegistration: registrationForm});
//     }
//
//     render() {
//         return (
//             <div>
//                 <SubHeader/>
//                 <RegisterForm
//                     onChange={this.updateRegistrationFormState}
//                     onSave={this.submitRegistration}
//                     newRegistration={this.state.newRegistration}/>
//             </div>
//         );
//     }
// }
//
// RegisterPage.propTypes = {
//     UserActions: PropTypes.object.isRequired
// };
//
//
// function mapStateToProps(state, ownProps) {
//     return {
//        // newRegistrationForm: state.newRegistration
//     };
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         UserActions: bindActionCreators(UserActions, dispatch)
//     };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);