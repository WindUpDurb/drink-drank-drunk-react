// "use strict";
//
// import React, {PropTypes} from "react";
// import {connect} from "react-redux";
// import {bindActionCreators} from "redux";
// import {browserHistory} from "react-router";
// import LoginForm from "./LoginForm";
// import SubHeader from "../common/SubHeader";
// import * as UserActions from "../../actions/UserActions";
// import toastr from "toastr";
//
// class LoginPage extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             loginForm: {}
//         };
//
//         this.submitLogin = this.submitLogin.bind(this);
//         this.updateLoginFormState = this.updateLoginFormState.bind(this);
//     }
//
//
//     submitLogin(event) {
//         event.preventDefault();
//         this.props.UserActions.submitLogin(this.state.loginForm)
//             .then(response => {
//                 if (response.error) {
//                     toastr.error(response.error);
//                 } else {
//                     browserHistory.push("/");
//                     toastr.info("Login Successful.");
//                 }
//             })
//             .catch(error => {
//                 toastr.error(error);
//             });
//     }
//
//
//     updateLoginFormState(event) {
//         event.preventDefault();
//         let field = event.target.name;
//         let loginForm = this.state.loginForm;
//         loginForm[field] = event.target.value;
//         this.setState({loginForm: loginForm});
//     }
//
//
//     render(){
//         return (
//             <div>
//                 <LoginForm 
//                     onChange={this.updateLoginFormState}
//                     onSubmit={this.submitLogin}
//                     loginForm={this.state.loginForm}
//                 />
//             </div>
//         );
//     }
// }
//
// LoginPage.propTypes = {
//     UserActions: PropTypes.object.isRequired
// };
//
// function mapStateToProps(state, ownProps) {
//     return {
//
//     };
//    
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         UserActions: bindActionCreators(UserActions, dispatch)
//     };
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);