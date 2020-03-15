import * as ActionTypes from '../actions/types';
import xs from 'xstream';
import {BASE_URL} from "../constants/config";
import * as actions from "../actions";
import sampleCombine from 'xstream/extra/sampleCombine';

export function requestSignUp(sources) {
    const request$ = sources.ACTION
        .filter(action => action.type === ActionTypes.SIGN_UP)
        .map(action => ({
            url: BASE_URL + 'api/people',
            category: 'requestSignUp',
            method: 'POST',
            send: action.payload
        }));

    let httpResponse$ = sources.HTTP
        .select('requestSignUp')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status === 200)
        .map(response => actions.signUpSuccess(response));

    return {
        ACTION: httpResponse$,
        HTTP: request$
    }
}

export function requestSignUpFailed(sources) {
    let httpResponse$ = sources.HTTP
        .select('requestSignUp')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status !== 200)
        .map(response => actions.signUpFailed(response));

    return {
        ACTION: httpResponse$
    }
}

export function requestLogout(sources) {

    const state$ = sources.STATE;
    const token$ = state$.map(state => state.loggedInPerson.id);

    const request$ = sources.ACTION
        .filter(action => action.type === ActionTypes.LOG_OUT)
        .compose(sampleCombine(token$))
        .map( ([action, token]) => ({
            url: BASE_URL + 'api/people/logout',
            category: 'requestLogout',
            method: 'POST',
            headers: {Authorization: token},
        }));

    let httpResponse$ = sources.HTTP
        .select('requestLogout')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status === 204)
        .map(response => actions.logoutSuccess(response));

    return {
        ACTION: httpResponse$,
        HTTP: request$
    }
}

export function requestLogoutFail(sources) {
    let httpResponse$ = sources.HTTP
        .select('requestLogout')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status !== 204)
        .map(response => actions.logoutFail(response));

    return {
        ACTION: httpResponse$
    }
}

export function requestLogin(sources) {
    const request$ = sources.ACTION
        .filter(action => action.type === ActionTypes.LOGIN)
        .map(action => ({
            url: BASE_URL + 'api/people/login?include=loggedInPerson',
            category: 'requestLogin',
            method: 'POST',
            send: action.payload
        }));

    let httpResponse$ = sources.HTTP
        .select('requestLogin')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status === 200)
        .map(response => actions.loginSuccess(response));

    return {
        ACTION: httpResponse$,
        HTTP: request$
    }
}

export function requestLoginFail(sources) {
    let httpResponse$ = sources.HTTP
        .select('requestLogin')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status !== 200)
        .map(response => actions.loginFail(response));

    return {
        ACTION: httpResponse$
    }
}