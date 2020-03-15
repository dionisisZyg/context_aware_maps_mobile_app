import * as ActionTypes from '../actions/types';
import { createReducer } from './index';
import {generalToast} from "../utils/toasts";

const INITIAL_STATE ={
    fetching: false,
    persons: []
};

function fetchLeaderboard(state, action) {
    return {
        ...state,
        fetching: true,
    }
}

function fetchLeaderboardSuccess(state, action) {
    return {
        ...state,
        fetching: false,
        persons: action.payload.body
    }
}

function fetchLeaderboardFailed(state, action) {
    generalToast('Failed to fetch leaderboard.', {buttonText: 'Ok'});
    return {
        ...state,
        fetching: false,
    }
}

export const person = createReducer(INITIAL_STATE, {
    [ActionTypes.FETCH_LEADERBOARD]: fetchLeaderboard,
    [ActionTypes.FETCH_LEADERBOARD_SUCCESS]: fetchLeaderboardSuccess,
    [ActionTypes.FETCH_LEADERBOARD_FAILED]: fetchLeaderboardFailed,
});
