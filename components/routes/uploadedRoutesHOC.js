import React, {Component} from 'react';
import {connect} from 'react-redux';
import UploadedRoutes from "./uploadedRoutes";
import * as actions from '../../actions';
import _ from "lodash";
import {routePurpose, routeTypes, routeWeatherTypeEnum} from "../../constants/constants";

class UploadedRoutesHOC extends Component {

    componentDidMount(){
        const query = {
            where: {personId: this.props.loggedInUserId},
            include: 'points',
            order: "creationDate DESC"
        };
        this.props.fetchUploadedRoutes({query});
    }

    render() {
        return (
            <UploadedRoutes
                {...this.props}
                routeTypes={_.map(routeTypes, type => type)}
                routePurposes={_.map(routePurpose, purpose => purpose)}
                routeWeatherTypes={_.map(routeWeatherTypeEnum, weatherType => weatherType)}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        uploadedRoutes: state.routes.uploadedRoutes,
        fetchingRoutes: state.routes.fetchingRoutes,
        loggedInUserId: state.loggedInPerson.userId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUploadedRoutes: (payload) => {
            dispatch(actions.fetchUploadedRoutes(payload))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadedRoutesHOC);