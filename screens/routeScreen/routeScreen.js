import React from 'react';
import {View, Text, Fab, Icon} from 'native-base';
import MapView from 'react-native-maps';
import {refineLocation} from "../../utils/functions";
import ReviewModal from "./reviewModal";
import {StyleSheet} from "react-native";

const RouteScreen  = (props) => {
    const {
        navigation,
        openModal
    } = props;
    const route = navigation.getParam("route", {points: []});
    let initialPoint = {
        latitude: 11.56779,
        longitude: 104.91037,
    };
    let points = [];
    points = route.points
        // .map((point, index) => {
        //     if(index === 0) {
        //         return point;
        //     }
        //     return {
        //         ...point,
        //         coords: refineLocation(point.coords, route.points[index - 1].coords)
        //     }
        // })
        .map(point => ({latitude: point.coords.latitude, longitude: point.coords.longitude }));
    try {
        initialPoint = {
            latitude: route.points[0].coords.latitude,
            longitude: route.points[0].coords.longitude,
        }
    } catch (e){
    }
    return (
        <View style={{ flex: 1 }}>
            <ReviewModal {...props}/>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: initialPoint.latitude,
                    longitude: initialPoint.longitude,
                    latitudeDelta: 0.0022,

                    longitudeDelta: 0.0021,
                }}
            >
                <MapView.Polyline
                    coordinates={points}
                    strokeWidth={2}
                    strokeColor="#00a8ff"
                    lineCap="round"
                />
            </MapView>
            {(
                route.person
                && route.person.id
            ) && (
                <Fab
                    active={true}
                    direction="up"
                    containerStyle={{ }}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={openModal}
                >
                    <Icon name="md-star" />
                </Fab>
            )}

        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
});

export default RouteScreen;