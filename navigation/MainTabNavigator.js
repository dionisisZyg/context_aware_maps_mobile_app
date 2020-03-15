import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import RouteRecodingScreenHOC from "../screens/routeRecoringScreen/routeRecordingScreenHOC";
import RoutesScreenHOC from "../screens/routesScreen/routesScreenHOC";
import RouteScreenHOC from "../screens/routeScreen/routeScreenHOC";
import SideBar from "../components/drawer/sideBar";
import LeaderBoardScreenHOC from "../screens/leaderboard/leaderBoardScreenHOC";

// =================

const stackNav = createStackNavigator(
    {
        RouteRecording: {
            screen: RouteRecodingScreenHOC,
            path: '/route-recording',
            key: 'route-recording',
            navigationOptions: ({ navigation }) => ({
                headerMode: 'screen',
            })
        },
        RoutesScreen: {
            screen: RoutesScreenHOC,
            path: '/routes',
            key: 'routes',
            navigationOptions: ({ navigation }) => ({
                headerMode: 'screen',
            })
        },
        LeaderboardScreen: {
            screen: LeaderBoardScreenHOC,
            path: '/leaderboard',
            key: 'leaderboard',
            navigationOptions: ({ navigation }) => ({
                headerMode: 'screen',
            })
        },
        RouteScreen: {
            screen: RouteScreenHOC,
            path:'/route',
            key: 'route',
            navigationOptions: ({ navigation }) => ({
                headerMode: 'screen',
            })
        }
    },
    {
        lazyLoad: true,
        initialRoute: "RouteRecording",
        initialRouteName: 'RouteRecording',
        navigationOptions: ({ navigation }) => ({
            headerMode: 'screen',
            gesturesEnabled: false,
        }),
    }
);

const AppNavigator = createDrawerNavigator(
    {
        Home: {
            screen: stackNav,
        },
    },
    {
        contentOptions: {
            activeTintColor: 'black',
            activeBackgroundColor: 'white',
        },
        contentComponent: (props) => (
            <SideBar {...props} />
        ),
        drawerPosition: 'left',
        backBehavior: 'initialRoute',
        initialRouteName: 'Home',
    },
);

export default AppNavigator;

