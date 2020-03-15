import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import RouteRecordingForm from "./routeRecordingForm";

const RouteRecordingScreen = (props) => {
    const { elapsedTime} = props;
    return (
        <View style={styles.container}>
            <View style={styles.timer}>
                <Text style={styles.mainTimer}>{elapsedTime}</Text>
            </View>
            <View style={styles.content}>
                <RouteRecordingForm
                    {...props}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    timer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },
    content: {
        flex: 2,
    },
    mainTimer: {
        fontSize: 60,
        fontWeight: '100',
        alignSelf: 'center'
    }
});

export default RouteRecordingScreen;