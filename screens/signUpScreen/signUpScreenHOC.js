import React, {Component} from 'react';
import {connect} from "react-redux";
import SignUpScreen from "./signUpScreen";
import * as actions from '../../actions/index';

class SignUpScreenHOC extends Component {

    onSubmit = (formData) => {
        this.props.signUp(formData);
    };

    render(){
        return (
            <SignUpScreen {...this.props} onSubmit={this.onSubmit}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSigningUp: state.loggedInPerson.signingUp
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (payload) => {
            dispatch(actions.signUp(payload))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreenHOC);