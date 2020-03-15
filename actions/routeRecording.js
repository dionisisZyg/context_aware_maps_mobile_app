import * as ActionTypes from './types';
import {actionCreator} from "../utils/functions";

export const startRecordingRoute = actionCreator(ActionTypes.START_RECORDING_ROUTE);

export const stopRecordingRoute = actionCreator(ActionTypes.STOP_RECORDING_ROUTE);

export const changeRouteRecordingState = actionCreator(ActionTypes.CHANGE_ROUTE_RECORDING_STATE);