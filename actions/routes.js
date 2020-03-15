import * as ActionTypes from './types';
import {actionCreator} from "../utils/functions";

export const fetchOtherUsersRoutes = actionCreator(ActionTypes.FETCH_OTHER_USERS_ROUTES);

export const fetchOtherUsersRoutesSuccess = actionCreator(ActionTypes.FETCH_OTHER_USERS_ROUTES_SUCCESS);

export const fetchOtherUsersRoutesFailed = actionCreator(ActionTypes.FETCH_OTHER_USERS_ROUTES_FAILED);

export const fetchRouteTypes = actionCreator(ActionTypes.FETCH_ROUTE_TYPES);

export const fetchRouteTypesSuccess = actionCreator(ActionTypes.FETCH_ROUTE_TYPES_SUCCESS);

export const fetchRouteTypesFailed = actionCreator(ActionTypes.FETCH_ROUTE_TYPES_FAILED);

export const fetchRoutePurposes = actionCreator(ActionTypes.FETCH_ROUTE_PURPOSES);

export const fetchRoutePurposesSuccess = actionCreator(ActionTypes.FETCH_ROUTE_PURPOSES_SUCCESS);

export const fetchRoutePurposesFailed = actionCreator(ActionTypes.FETCH_ROUTE_PURPOSES_FAILED);

export const fetchRouteWeatherTypes = actionCreator(ActionTypes.FETCH_ROUTE_WEATHER_TYPES);

export const fetchRouteWeatherTypesSuccess = actionCreator(ActionTypes.FETCH_ROUTE_WEATHER_TYPES_SUCCESS);

export const fetchRouteWeatherTypesFailed = actionCreator(ActionTypes.FETCH_ROUTE_WEATHER_TYPES_FAILED);

export const fetchUploadedRoutes = actionCreator(ActionTypes.FETCH_UPLOADED_ROUTES);

export const fetchUploadedRoutesSuccess = actionCreator(ActionTypes.FETCH_UPLOADED_ROUTES_SUCCESS);

export const fetchUploadedRoutesFailed = actionCreator(ActionTypes.FETCH_UPLOADED_ROUTES_FAILED);

export const uploadUnsavedRoutes = actionCreator(ActionTypes.UPLOAD_UNSAVED_ROUTES);

export const uploadUnsavedRoutesSuccess = actionCreator(ActionTypes.UPLOAD_UNSAVED_ROUTES_SUCCESS);

export const uploadUnsavedRoutesFailed = actionCreator(ActionTypes.UPLOAD_UNSAVED_ROUTES_FAILED);

export const addUnsavedRoute = actionCreator(ActionTypes.ADD_UNSAVED_ROUTE);