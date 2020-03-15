import * as ActionTypes from '../actions/types';
import { createReducer } from './index';

const INITIAL_STATE ={
    isRecording: false,
    recordingStartTime: ''
};

function changeRouteRecordingState(state, action) {
    return {
        ...state,
        [action.payload.key]: action.payload.value
    }
}

function startRecordingRoute(state, action) {

    return {
        ...state,
        isRecording: true,
        recordingStartTime: action.payload.currentDate
    }
}

function stopRecordingRoute(state, action) {
    return {
        ...state,
        isRecording: false,
        recordingStartTime: null
    }
}

export const routeRecording = createReducer(INITIAL_STATE, {
    [ActionTypes.CHANGE_ROUTE_RECORDING_STATE]: changeRouteRecordingState,
    [ActionTypes.START_RECORDING_ROUTE]: startRecordingRoute,
    [ActionTypes.STOP_RECORDING_ROUTE]: stopRecordingRoute,
});
