import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import AuthStack from "./AuthStack";
import AuthLoadingScreen from '../screens/auth/authLoadingScreen';
// import RouteScreenHOC from "../screens/routeScreen/routeScreenHOC";

export default createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Main: MainTabNavigator,
    Auth: AuthStack,

});