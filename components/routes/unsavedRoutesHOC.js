import React, {Component} from 'react';
import {connect} from 'react-redux';
import UnsavedRoutes from "./unsavedRoutes";
import {uploadUnsavedRoutes} from "../../actions";
import _ from "lodash";
import {routePurpose, routeTypes, routeWeatherTypeEnum} from "../../constants/constants";
import RouteRecordingScreen from "../../screens/routeRecoringScreen/routeRecordingScreen";

class UnsavedRoutesHOC extends Component {

    onRoutesUpload = () => {

        const sendBody  = this.props.unSavedRoutes.map(route => ({
            points: route.points.map(point => ({...point})),
            type: route.type,
            weatherType: route.weatherType,
            isDuringDay: !!(route.time === 'day'),
            purpose: route.purpose
        })).filter(route => route.points.length > 0);

        this.props.uploadUnsavedRoutes({sendBody: sendBody});
    };

    render() {
        return (
            <UnsavedRoutes
                {...this.props}
                onRoutesUpload={this.onRoutesUpload}
                routeTypes={_.map(routeTypes, type => type)}
                routePurposes={_.map(routePurpose, purpose => purpose)}
                routeWeatherTypes={_.map(routeWeatherTypeEnum, weatherType => weatherType)}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        unSavedRoutes: state.routes.unSavedRoutes,
        uploadingRoutes: state.routes.uploadingRoutes,
        unSavedRoute: state.route.route,
        // routeTypes: state.routes.routeTypes,
        // routeWeatherTypes: state.routes.routeWeatherTypes,
        // routePurposes: state.routes.routePurposes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        uploadUnsavedRoutes: (payload) => {
            dispatch(uploadUnsavedRoutes(payload))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UnsavedRoutesHOC);