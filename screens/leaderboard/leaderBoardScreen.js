import React from "react";
import {Body, Card, CardItem, Content, Text, View} from "native-base";
import CustomSpinner from "../../components/general/spinner/customSpinner";
import {getEnumNameByCode, getRouteDistance, getRouteTimeElapsed} from "../../utils/functions";

const LeaderBoardScreen = (props) => {
    const {fetching, persons} = props;

    if(fetching){
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
                    persons.map((person, index) => (
                        <Card key={index}>
                            <CardItem>
                                <Body>
                                    <Text>
                                        {`Rank: ${index + 1}`}
                                    </Text>
                                    <Text>
                                        {`Username: ${person.username}`}
                                    </Text>
                                    <Text>
                                        {`Points: ${person.points}`}
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

export default LeaderBoardScreen;