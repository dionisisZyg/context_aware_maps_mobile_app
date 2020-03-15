import * as ActionTypes from './types';
import {actionCreator} from "../utils/functions";

export const fetchLeaderboard = actionCreator(ActionTypes.FETCH_LEADERBOARD);

export const fetchLeaderboardSuccess = actionCreator(ActionTypes.FETCH_LEADERBOARD_SUCCESS);

export const fetchLeaderboardFailed = actionCreator(ActionTypes.FETCH_LEADERBOARD_FAILED);
