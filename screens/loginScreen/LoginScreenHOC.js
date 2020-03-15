import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Container, Content, Form, Item, Input, Button } from 'native-base';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import LoginScreen from './LoginScreen';

class LoginScreenHOC extends React.Component {
    static navigationOptions = {
        title: 'LoginScreen',
    };

    onSubmit = (formData) => {
        this.props.login(formData);
    };

    render() {
        return (
            <LoginScreen {...this.props} onSubmit={this.onSubmit}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggingIn: state.loggedInPerson.loggingIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (payload) => {
            dispatch(actions.login(payload))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenHOC)