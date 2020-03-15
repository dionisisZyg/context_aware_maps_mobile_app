import * as ActionTypes from '../actions/types';
import xs from 'xstream';
import {BASE_URL} from "../constants/config";
import * as actions from "../actions";
import sampleCombine from 'xstream/extra/sampleCombine';

export function requestFetchLeaderboard(sources) {
    const state$ = sources.STATE;
    const token$ = state$.map(state => state.loggedInPerson.id);

    const request$ = sources.ACTION
        .filter(action => action.type === ActionTypes.FETCH_LEADERBOARD)
        .compose(sampleCombine(token$))
        .map(([action, token]) => ({
            url: BASE_URL + 'api/people/leaderboard',
            category: 'requestFetchLeaderboard',
            method: 'GET',
            headers: {Authorization: token}
        }));

    let httpResponse$ = sources.HTTP
        .select('requestFetchLeaderboard')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status === 200)
        .map(response => actions.fetchLeaderboardSuccess(response));

    return {
        ACTION: httpResponse$,
        HTTP: request$
    }
}

export function requestFetchLeaderboardFailed(sources) {
    let httpResponse$ = sources.HTTP
        .select('requestFetchLeaderboard')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status !== 200)
        .map(response => actions.fetchLeaderboardFailed(response));

    return {
        ACTION: httpResponse$
    }
}