import * as ActionTypes from './types';

export function addRoutePoint(payload){
    return {
        type: ActionTypes.ADD_ROUTE_POINT,
        payload: payload
    }
}