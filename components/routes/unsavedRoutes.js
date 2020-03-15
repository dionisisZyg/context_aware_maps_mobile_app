import React from 'react';
import {Body, Content, Card, CardItem, Fab, Icon, Text, View} from "native-base";
import {getEnumNameByCode, getRouteDistance, getRouteTimeElapsed} from "../../utils/functions";
import CustomSpinner from "../general/spinner/customSpinner";

const UnsavedRoutes =  (props) => {
    const {unSavedRoutes,
        uploadUnsavedRoutes,
        uploadingRoutes,
        onRoutesUpload,
        unSavedRoute,
        routeTypes,
        routeWeatherTypes,
        routePurposes,
        navigation
    } = props;

    if(uploadingRoutes){
        return (
            <View style={{flex: 1}}>
                <CustomSpinner/>
            </View>
        )
    }

    return (
        <View style={{flex: 1}}>
            <Content>
                {
                    unSavedRoutes.map((route, index) => (
                        <Card key={index}>
                            <CardItem button onPress={
                                () => navigation.navigate(
                                    'RouteScreen',
                                    {
                                        route: route,
                                        unsaved: true
                                    }
                                )
                            }>
                                <Body>
                                    <Text>
                                        {`route #${index}`}
                                    </Text>
                                    <Text>
                                        {`distance covered: ${getRouteDistance(route.points)} meters`}
                                    </Text>
                                    <Text>
                                        {`duration: ${getRouteTimeElapsed(route.points)}`}
                                    </Text>
                                    <Text>
                                        {`Type: ${getEnumNameByCode(route.type, routeTypes)}`}
                                    </Text>
                                    <Text>
                                        {`Weather: ${getEnumNameByCode(route.weatherType, routeWeatherTypes)}`}
                                    </Text>
                                    <Text>
                                        {`Purpose: ${getEnumNameByCode(route.purpose, routePurposes)}`}
                                    </Text>
                                    <Text>
                                        {`Time: ${route.time === 'night' ? 'Night' : 'Day'}`}
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    ))
                }
            </Content>

            <Fab
                active={true}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={onRoutesUpload}
            >
                <Icon name="md-cloud-upload" />
            </Fab>
        </View>
    )
};

export default UnsavedRoutes;