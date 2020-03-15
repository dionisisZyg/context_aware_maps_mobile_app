import * as ActionTypes from '../actions/types';
import { createReducer } from './index';

const INITIAL_STATE ={
    route: []
};

function addRoutePoint(state, action) {
    return {
        ...state,
        route: [
            ...state.route,
            action.payload.point
        ]
    }
}

function stopRecordingRoute(state, action) {
    return {
        ...state,
        route: INITIAL_STATE.route
    }
}

export const route = createReducer(INITIAL_STATE, {
    [ActionTypes.ADD_ROUTE_POINT]: addRoutePoint,
    [ActionTypes.STOP_RECORDING_ROUTE]: stopRecordingRoute
});
