import React, {Component} from 'react';
import {connect} from "react-redux";
import RouteRecordingScreen from "./routeRecordingScreen";
import * as actions from '../../actions';
import {getElapsedTime} from "../../utils/functions";
import {defaultElapsedTime} from "../../constants/config";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {destroy} from "redux-form";
import {routePurpose, routeTypes, routeWeatherTypeEnum} from "../../constants/constants";
import _ from "lodash";


class RouteRecodingScreenHOC extends Component {

    constructor(props){
        super(props);
        this.state = {
            elapsedTime: defaultElapsedTime,
        };
        this.intervalId = null;
        this.locationSubscription = null;
    }

    async componentDidMount() {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        // this.props.fetchRouteWeatherTypes();
        // this.props.fetchRoutePurposes();
        // this.props.fetchRouteTypes();
    }

    _getLocationAsync = async () => {
         this.locationSubscription = await Location.watchPositionAsync(
            {
                accuracy : Location.Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 0
            },
            (location) => {this.props.addRoutePoint({point: location});}
        );
    };

    onRouteRecordingFormSubmit = (formData) => {
        if(this.props.isRecording){
            this.props.stopRecordingRoute();
            this.setState({
                ...this.state,
                elapsedTime: defaultElapsedTime,

            });
            clearInterval(this.intervalId);
            if(this.locationSubscription){
                this.locationSubscription.remove();
            }

            this.props.addUnsavedRoute({
                unSavedRoute: {
                    points: this.props.unSavedRoute,
                    type: formData.type,
                    weatherType: formData.weather,
                    time: formData.time,
                    purpose: formData.purpose
                }
            });

            this.props.destroy('routeRecordingForm');
            return;
        }

        const currentDate = new Date().getTime();
        this.props.startRecordingRoute({currentDate: currentDate});
        this._getLocationAsync();
        this.setState({
            ...this.state,
            elapsedTime: getElapsedTime(currentDate)
        });
        this.intervalId = setInterval(
            () => {
                this.setState({
                    ...this.state,
                    elapsedTime: getElapsedTime(this.props.recordingStartTime)
                })
            },
            1000
        )
    };

    componentWillUnmount() {
        if(this.intervalId){
            clearInterval(this.intervalId);
        }

        if(this.locationSubscription){
            this.locationSubscription.remove();
        }
    }

    render() {
        return (
            <RouteRecordingScreen
                {...this.props}
                elapsedTime={this.state.elapsedTime}
                onRouteRecordingFormSubmit={this.onRouteRecordingFormSubmit}
                routeTypes={_.map(routeTypes, type => type)}
                routePurposes={_.map(routePurpose, purpose => purpose)}
                routeWeatherTypes={_.map(routeWeatherTypeEnum, weatherType => weatherType)}
            />
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        isRecording: state.routeRecording.isRecording,
        recordingStartTime: state.routeRecording.recordingStartTime,
        unSavedRoute: state.route.route,
        // routeTypes: state.routes.routeTypes,
        // routeWeatherTypes: state.routes.routeWeatherTypes,
        // routePurposes: state.routes.routePurposes
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        changeRouteRecordingState: (payload) => {
            dispatch(actions.changeRouteRecordingState(payload))
        },
        startRecordingRoute: (payload) => {
            dispatch(actions.startRecordingRoute(payload))
        },
        stopRecordingRoute: (payload) => {
            dispatch(actions.stopRecordingRoute(payload))
        },
        addRoutePoint: (payload) => {
            dispatch(actions.addRoutePoint(payload))
        },
        addUnsavedRoute: (payload) => {
            dispatch(actions.addUnsavedRoute(payload))
        },
        fetchRouteWeatherTypes: (payload) => {
            dispatch(actions.fetchRouteWeatherTypes(payload))
        },
        fetchRoutePurposes: (payload) => {
            dispatch(actions.fetchRoutePurposes(payload))
        },
        fetchRouteTypes: (payload) => {
            dispatch(actions.fetchRouteTypes(payload))
        },
        destroy: (form) => {
            dispatch(destroy(form))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteRecodingScreenHOC);