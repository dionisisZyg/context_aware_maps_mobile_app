import React from 'react';
import {View, StyleSheet} from "react-native";
import LoginForm from '../../components/login/loginForm';
import CustomSpinner from "../../components/general/spinner/customSpinner";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});

const LoginScreen = (props) => {
    const {loggingIn, navigation} = props;
    return (
        <View style={styles.container}>
            <LoginForm {...props} onSubmit={props.onSubmit}/>
            {loggingIn && (
                <CustomSpinner
                    visible={loggingIn}
                />
            )}
        </View>
    )
};

export default LoginScreen;