import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import _ from "lodash";
import {routePurpose, routeTypes, routeWeatherTypeEnum} from "../../constants/constants";
import OtherUsersUploadedRoutes from "./otherUsersUploadedRoutes";

class OtherUsersUploadedRoutesHOC extends Component {
    componentDidMount(){
        const query = {
            where: {personId: {neq: this.props.loggedInUserId}},
            include: ['points', 'person'],
            order: "creationDate DESC"
        };
        this.props.fetchOtherUsersRoutes({query});
    }

    render() {
        return (
            <OtherUsersUploadedRoutes
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
        loggedInUserId: state.loggedInPerson.userId,
        uploadedRoutes: state.routes.otherUsersRoutes,
        fetchingRoutes: state.routes.fetchingOtherUsersRoutes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOtherUsersRoutes: payload => {
            dispatch(actions.fetchOtherUsersRoutes(payload))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OtherUsersUploadedRoutesHOC);