import React from 'react';
import {Body, Content, Card, CardItem, Fab, Icon, Text, View} from "native-base";
import {getEnumNameByCode, getRouteDistance, getRouteTimeElapsed} from "../../utils/functions";
import CustomSpinner from "../general/spinner/customSpinner";

const UploadedRoutes = (props) => {
    const {
        uploadedRoutes,
        fetchingRoutes,
        navigation,
        routeTypes,
        routeWeatherTypes,
        routePurposes
    } = props;

    if(fetchingRoutes){
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
                    uploadedRoutes.map((route, index) => (
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
                                        {`Id: ${route.id}`}
                                    </Text>
                                    <Text>
                                        {`distance covered: ${getRouteDistance(route.points)} meters`}
                                    </Text>
                                    <Text>
                                        {`duration: ${getRouteTimeElapsed(route.points)}`}
                                    </Text>
                                    <Text>
                                        {`Type: ${getEnumNameByCode(route.typeCode, routeTypes)}`}
                                    </Text>
                                    <Text>
                                        {`Weather: ${getEnumNameByCode(route.weatherTypeCode, routeWeatherTypes)}`}
                                    </Text>
                                    <Text>
                                        {`Purpose: ${getEnumNameByCode(route.purposeCode, routePurposes)}`}
                                    </Text>
                                    <Text>
                                        {`Time: ${route.isDuringDay ? 'Day' : 'Night'}`}
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    ))
                }
            </Content>
        </View>
    )
};

export default UploadedRoutes;