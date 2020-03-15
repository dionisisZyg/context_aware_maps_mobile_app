import LoginHOC from "../screens/loginScreen/LoginScreenHOC";
import SignUpScreenHOC from "../screens/signUpScreen/signUpScreenHOC";
import {createStackNavigator} from "react-navigation";

const AuthStack = createStackNavigator({
    LoginScreen: LoginHOC,
    SignUpScreen: SignUpScreenHOC
});

export default AuthStack