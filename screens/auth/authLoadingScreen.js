import React from 'react';
import {connect} from 'react-redux';
import MainTabNavigator from "../../navigation/MainTabNavigator";
import AuthStack from "../../navigation/AuthStack";

class AuthLoadingScreen extends React.Component {

    render() {
        const {isAuth} = this.props;
        if(isAuth){
            return (
                <MainTabNavigator />
            )
        }

        return (
            <AuthStack/>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.loggedInPerson.id
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)