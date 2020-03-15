import * as ActionTypes from '../actions/types';
import xs from 'xstream';
import {BASE_URL} from "../constants/config";
import * as actions from "../actions";
import sampleCombine from 'xstream/extra/sampleCombine';

export function requestCreateReview(sources) {
    const state$ = sources.STATE;
    const token$ = state$.map(state => state.loggedInPerson.id);

    const request$ = sources.ACTION
        .filter(action => action.type === ActionTypes.CREATE_REVIEW)
        .compose(sampleCombine(token$))
        .map(([action, token]) => ({
            url: BASE_URL + 'api/reviews',
            category: 'requestCreateReview',
            method: 'POST',
            send: action.payload.sendBody,
            headers: {Authorization: token}
        }));

    let httpResponse$ = sources.HTTP
        .select('requestCreateReview')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status === 200)
        .map(response => actions.createReviewSuccess(response));

    return {
        ACTION: httpResponse$,
        HTTP: request$
    }
}

export function requestCreateReviewFailed(sources) {
    let httpResponse$ = sources.HTTP
        .select('requestCreateReview')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status !== 200)
        .map(response => actions.createReviewFailed(response));

    return {
        ACTION: httpResponse$
    }
}