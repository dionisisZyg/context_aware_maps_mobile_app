import React from 'react';
import {Text, View} from "react-native";
import {Button, Form, Picker} from "native-base";
import {Field, reduxForm} from "redux-form";
import RenderPicker from "../../components/inputs/renderPicker";

const RouteRecordingForm =  (props) => {
    const {
        handleSubmit,
        isRecording,
        onRouteRecordingFormSubmit,
        routeTypes,
        routePurposes,
        routeWeatherTypes
    } = props;
    return (
        <View>
            <Form>
                <Field
                    enabled={!isRecording}
                    name="purpose"
                    component={ RenderPicker }
                    mode="dialog"
                >
                    <Picker.Item
                        label="Purpose"
                        value=""
                    />
                    {routePurposes.map(type => (
                        <Picker.Item
                            key={type.code}
                            label={type.name}
                            value={type.code}
                        />
                    ))}
                </Field>
                <Field
                    enabled={!isRecording}
                    name="type"
                    component={ RenderPicker }
                    mode="dialog"
                >
                    <Picker.Item
                        label="Select type"
                        value=""
                    />
                    {routeTypes.map(type => (
                        <Picker.Item
                            key={type.code}
                            label={type.name}
                            value={type.code}
                        />
                    ))}
                </Field>
                <Field
                    enabled={!isRecording}
                    name="weather"
                    component={ RenderPicker }
                    mode="dialog"
                >
                    <Picker.Item
                        label="Weather"
                        value=""
                    />
                    {routeWeatherTypes.map(type => (
                        <Picker.Item
                            key={type.code}
                            label={type.name}
                            value={type.code}
                        />
                    ))}
                </Field>
                <Field
                    enabled={!isRecording}
                    name="time"
                    component={ RenderPicker }
                    mode="dialog"
                >
                    <Picker.Item label="Time" value="" />
                    <Picker.Item label="Day" value="day" />
                    <Picker.Item label="Night" value="night" />
                </Field>
                <Button block primary onPress={handleSubmit(onRouteRecordingFormSubmit)} style={styles.button}>
                    <Text>
                        {isRecording?'Stop':'Start'}
                    </Text>
                </Button>
            </Form>
        </View>
    )
};

const styles = {
    button: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default reduxForm({
    form: 'routeRecordingForm'
})(RouteRecordingForm);