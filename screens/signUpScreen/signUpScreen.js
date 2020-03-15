import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import SignUpForm from '../../components/signUp/signUpForm';
import CustomSpinner from "../../components/general/spinner/customSpinner";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});

const SignUpScreen = (props) => {
    const {isSigningUp, navigation} = props;
    return(
        <View style={styles.container}>
            <SignUpForm {...props} onSubmit={props.onSubmit}/>
            {isSigningUp && (
                <CustomSpinner
                />
            )}
        </View>
    )
};

export default SignUpScreen;