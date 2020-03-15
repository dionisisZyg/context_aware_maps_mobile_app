import React from 'react';
import { TouchableOpacity, Platform, Text } from 'react-native';
import {View} from "native-base";

const DrawerItem = (props) => {
    const {
        title, navigateTo, iconName
    } = props;
    return (
        <TouchableOpacity
            underlayColor="#e2e2e2"
            onPress={navigateTo}
            style={{
                paddingLeft: 10,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
            }}
        >
            <View style={{
                flex: 1 / 9,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: iconName === 'puzzle-piece' ? 2 : 0,
            }}
            >
            </View>
            <Text
                style={{
                    flex: 8 / 9,
                    marginLeft: 20,
                    alignSelf: 'center',
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default DrawerItem;
