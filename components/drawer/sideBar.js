import React, { Component } from "react";
import { Image } from "react-native";
import {
    Content,
    Text,
    List,
    ListItem,
    Icon,
    Container,
    Left,
    Right,
    Badge
} from "native-base";
import styles from "./styles";
import {connect} from "react-redux";
import * as actions from '../../actions';

const drawerCover = require("../../assets/images/drawer-cover.png");
const drawerImage = require("../../assets/images/logo-kitchen-sink.png");
const datas = [
    {
        name: "Route recoding",
        route: "RouteRecording",
        icon: "recording",
        bg: "#C5F442"
    },
    {
        name: "Routes",
        route: "RoutesScreen",
        icon: "map",
        bg: "#477EEA",
    },
    {
        name: "Leaderboard",
        route: "LeaderboardScreen",
        icon: "star",
        bg: "#477EEA",
    },
    {
        key: 'logout',
        name: "Log out",
        route: "RoutesScreen",
        icon: "log-out",
        bg: "#477EEA",
    },
];

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4
        };
    }

    render() {
        return (
            <Container>
                <Content
                    bounces={false}
                    style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
                >
                    <Image source={drawerCover} style={styles.drawerCover} />
                    <Image square style={styles.drawerImage} source={drawerImage} />

                    <List
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem
                                button
                                noBorder
                                onPress={() => {
                                    if(data.key === 'logout'){
                                        this.props.logout();
                                        return;
                                    }
                                    this.props.navigation.navigate(data.route);
                                }}
                            >
                                <Left>
                                    <Icon
                                        active
                                        name={data.icon}
                                        style={{ color: "#777", fontSize: 26, width: 30 }}
                                    />
                                    <Text style={styles.text}>
                                        {data.name}
                                    </Text>
                                </Left>
                            </ListItem>}
                    />
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {return {}};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(actions.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);