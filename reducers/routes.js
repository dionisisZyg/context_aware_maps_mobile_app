import * as ActionTypes from '../actions/types';
import { createReducer } from './index';
import moment from "moment";
import {generalToast} from "../utils/toasts";

const calculateRoutes = (routesDto) => {
    return routesDto.map(route => ({
        points: route.points.map(point => ({
            coords: {
                latitude: point.latitude,
                longitude: point.longitude,
                altitude: point.altitude,
                accuracy: point.accuracy,
                altitudeAccuracy: point.altitudeAccuracy,
                heading: point.heading,
                speed: point.speed,
                timestamp: point.timestamp ? moment(point.timestamp).utc() : null
            },
            timestamp: point.timestamp ? moment(point.timestamp).utc() : null
        })),
        id: route.id,
        weatherTypeCode: route.weatherTypeCode,
        typeCode: route.typeCode,
        purposeCode: route.purposeCode,
        isDuringDay: route.isDuringDay,
        personId: route.personId? route.personId: null,
        person: route.person? route.person: null
    }));
};

const INITIAL_STATE ={
    unSavedRoutes: [],
    uploadedRoutes: [],
    uploadingRoutes: false,
    fetchingRoutes: false,
    fetchingRouteWeatherTypes: false,
    routeWeatherTypes: [],
    routePurposes: [],
    fetchingRoutePurposes: false,
    fetchingRouteTypes: false,
    routeTypes: [],
    otherUsersRoutes: [],
    fetchingOtherUsersRoutes: false
};


function addUnsavedRoute(state, action) {
    generalToast('Route recorded', {buttonText: 'Ok'});
    return {
        ...state,
        unSavedRoutes: [
            ...state.unSavedRoutes,
            action.payload.unSavedRoute
        ]
    }
}

function uploadUnsavedRoutes(state, action) {
    return {
        ...state,
        uploadingRoutes: true
    };
}

function uploadUnsavedRoutesSuccess(state, action) {
    generalToast('Routes were uploaded', {buttonText: 'Ok'});
    return {
        ...state,
        uploadingRoutes: false,
        unSavedRoutes: []
    };
}


function uploadUnsavedRoutesFailed(state, action) {
    generalToast('Failed to upload routes', {buttonText: 'Ok'});
    return {
        ...state,
        uploadingRoutes: false
    };
}

function fetchUploadedRoutes(state, action) {
    return {
        ...state,
        fetchingRoutes: true
    }
}

function fetchUploadedRoutesSuccess(state, action) {
    const routes = calculateRoutes(action.payload.body);
    return {
        ...state,
        fetchingRoutes: false,
        uploadedRoutes: routes
    }
}

function fetchUploadedRoutesFailed(state, action) {
    return {
        ...state,
        fetchingRoutes: false
    }
}

function fetchRouteWeatherTypes(state, action) {
    return {
        ...state,
        fetchingRouteWeatherTypes: true
    }
}

function fetchRouteWeatherTypesSuccess(state, action) {
    return {
        ...state,
        fetchingRouteWeatherTypes: false,
        routeWeatherTypes: action.payload.body
    }
}

function fetchRouteWeatherTypesFailed(state, action) {
    return {
        ...state,
        fetchingRouteWeatherTypes: false
    }
}

function fetchRoutePurposes(state, action) {
    return {
        ...state,
        fetchingRoutePurposes: true
    }
}

function fetchRoutePurposesSuccess(state, action) {
    return {
        ...state,
        fetchingRoutePurposes: false,
        routePurposes: action.payload.body
    }
}

function fetchRoutePurposesFailed(state, action) {
    return {
        ...state,
        fetchingRoutePurposes: false
    }
}

function fetchRouteTypes(state, action) {
    return {
        ...state,
        fetchingRouteTypes: true
    }
}

function fetchRouteTypesSuccess(state, action) {
    return {
        ...state,
        fetchingRouteTypes: false,
        routeTypes: action.payload.body
    }
}

function fetchRouteTypesFailed(state, action) {
    return {
        ...state,
        fetchingRouteTypes: false
    }
}

function fetchOtherUsersRoutes(state, action) {
    return {
        ...state,
        fetchingOtherUsersRoutes: true
    }
}

function fetchOtherUsersRoutesSuccess(state, action) {
    const routes = calculateRoutes(action.payload.body);
    return {
        ...state,
        fetchingOtherUsersRoutes: false,
        otherUsersRoutes: routes
    }
}

function fetchOtherUsersRoutesFailed(state, action) {
    return {
        ...state,
        fetchingOtherUsersRoutes: false
    }
}

export const routes = createReducer(INITIAL_STATE, {
    [ActionTypes.ADD_UNSAVED_ROUTE]: addUnsavedRoute,
    [ActionTypes.UPLOAD_UNSAVED_ROUTES]: uploadUnsavedRoutes,
    [ActionTypes.UPLOAD_UNSAVED_ROUTES_SUCCESS]: uploadUnsavedRoutesSuccess,
    [ActionTypes.UPLOAD_UNSAVED_ROUTES_FAILED]: uploadUnsavedRoutesFailed,
    [ActionTypes.FETCH_UPLOADED_ROUTES]: fetchUploadedRoutes,
    [ActionTypes.FETCH_UPLOADED_ROUTES_SUCCESS]: fetchUploadedRoutesSuccess,
    [ActionTypes.FETCH_UPLOADED_ROUTES_FAILED]: fetchUploadedRoutesFailed,
    [ActionTypes.FETCH_ROUTE_WEATHER_TYPES]: fetchRouteWeatherTypes,
    [ActionTypes.FETCH_ROUTE_WEATHER_TYPES_SUCCESS]: fetchRouteWeatherTypesSuccess,
    [ActionTypes.FETCH_ROUTE_WEATHER_TYPES_FAILED]: fetchRouteWeatherTypesFailed,
    [ActionTypes.FETCH_ROUTE_PURPOSES]: fetchRoutePurposes,
    [ActionTypes.FETCH_ROUTE_PURPOSES_SUCCESS]: fetchRoutePurposesSuccess,
    [ActionTypes.FETCH_ROUTE_PURPOSES_FAILED]: fetchRoutePurposesFailed,
    [ActionTypes.FETCH_ROUTE_TYPES]: fetchRouteTypes,
    [ActionTypes.FETCH_ROUTE_TYPES_SUCCESS]: fetchRouteTypesSuccess,
    [ActionTypes.FETCH_ROUTE_TYPES_FAILED]: fetchRouteTypesFailed,

    [ActionTypes.FETCH_OTHER_USERS_ROUTES]: fetchOtherUsersRoutes,
    [ActionTypes.FETCH_OTHER_USERS_ROUTES_SUCCESS]: fetchOtherUsersRoutesSuccess,
    [ActionTypes.FETCH_OTHER_USERS_ROUTES_FAILED]: fetchOtherUsersRoutesFailed,
});
