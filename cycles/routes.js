import * as ActionTypes from '../actions/types';
import xs from 'xstream';
import {BASE_URL} from "../constants/config";
import * as actions from "../actions";
import sampleCombine from 'xstream/extra/sampleCombine';

export function requestOtherUsersRoutes(sources) {
    const state$ = sources.STATE;
    const token$ = state$.map(state => state.loggedInPerson.id);

    const request$ = sources.ACTION
        .filter(action => action.type === ActionTypes.FETCH_OTHER_USERS_ROUTES)
        .compose(sampleCombine(token$))
        .map(([action, token]) => ({
            url: BASE_URL + 'api/routes' + (action.payload.query ?
                `?filter=${JSON.stringify(action.payload.query)}` : ""),
            category: 'requestOtherUsersRoutes',
            method: 'GET',
            headers: {Authorization: token}
        }));

    let httpResponse$ = sources.HTTP
        .select('requestOtherUsersRoutes')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status === 200)
        .map(response => actions.fetchOtherUsersRoutesSuccess(response));

    return {
        ACTION: httpResponse$,
        HTTP: request$
    }
}

export function requestOtherUsersRoutesFailed(sources) {
    let httpResponse$ = sources.HTTP
        .select('requestOtherUsersRoutes')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status !== 200)
        .map(response => actions.fetchOtherUsersRoutesFailed(response));

    return {
        ACTION: httpResponse$
    }
}

export function requestRouteTypes(sources) {
    const state$ = sources.STATE;
    const token$ = state$.map(state => state.loggedInPerson.id);

    const request$ = sources.ACTION
        .filter(action => action.type === ActionTypes.FETCH_ROUTE_TYPES)
        .compose(sampleCombine(token$))
        .map(([action, token]) => ({
            url: BASE_URL + 'api/routes/types',
            category: 'requestRouteTypes',
            method: 'GET',
            headers: {Authorization: token}
        }));

    let httpResponse$ = sources.HTTP
        .select('requestRouteTypes')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status === 200)
        .map(response => actions.fetchRouteTypesSuccess(response));

    return {
        ACTION: httpResponse$,
        HTTP: request$
    }
}

export function requestRouteTypesFailed(sources) {
    let httpResponse$ = sources.HTTP
        .select('requestRouteTypes')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status !== 200)
        .map(response => actions.fetchRouteTypesFailed(response));

    return {
        ACTION: httpResponse$
    }
}

export function requestRoutePurposes(sources) {
    const state$ = sources.STATE;
    const token$ = state$.map(state => state.loggedInPerson.id);

    const request$ = sources.ACTION
        .filter(action => action.type === ActionTypes.FETCH_ROUTE_PURPOSES)
        .compose(sampleCombine(token$))
        .map(([action, token]) => ({
            url: BASE_URL + 'api/routes/purpose',
            category: 'requestRoutePurposes',
            method: 'GET',
            headers: {Authorization: token}
        }));

    let httpResponse$ = sources.HTTP
        .select('requestRoutePurposes')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status === 200)
        .map(response => actions.fetchRoutePurposesSuccess(response));

    return {
        ACTION: httpResponse$,
        HTTP: request$
    }
}

export function requestRoutePurposesFailed(sources) {
    let httpResponse$ = sources.HTTP
        .select('requestRoutePurposes')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status !== 200)
        .map(response => actions.fetchRoutePurposesFailed(response));

    return {
        ACTION: httpResponse$
    }
}

export function requestRouteWeatherTypes(sources) {
    const state$ = sources.STATE;
    const token$ = state$.map(state => state.loggedInPerson.id);

    const request$ = sources.ACTION
        .filter(action => action.type === ActionTypes.FETCH_ROUTE_WEATHER_TYPES)
        .compose(sampleCombine(token$))
        .map(([action, token]) => ({
            url: BASE_URL + 'api/routes/weatherTypes',
            category: 'requestRouteWeatherTypes',
            method: 'GET',
            headers: {Authorization: token}
        }));

    let httpResponse$ = sources.HTTP
        .select('requestRouteWeatherTypes')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status === 200)
        .map(response => actions.fetchRouteWeatherTypesSuccess(response));

    return {
        ACTION: httpResponse$,
        HTTP: request$
    }
}

export function requestRouteWeatherTypesFailed(sources) {
    let httpResponse$ = sources.HTTP
        .select('requestRouteWeatherTypes')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status !== 200)
        .map(response => actions.fetchRouteWeatherTypesFailed(response));

    return {
        ACTION: httpResponse$
    }
}

export function requestUploadUnsavedRoutes(sources) {
    const state$ = sources.STATE;
    const token$ = state$.map(state => state.loggedInPerson.id);

    const request$ = sources.ACTION
        .filter(action => action.type === ActionTypes.UPLOAD_UNSAVED_ROUTES)
        .compose(sampleCombine(token$))
        .map(([action, token]) => ({
            url: BASE_URL + 'api/routes/collection',
            category: 'requestUploadUnsavedRoutes',
            method: 'POST',
            send: action.payload.sendBody,
            headers: {Authorization: token}
        }));

    let httpResponse$ = sources.HTTP
        .select('requestUploadUnsavedRoutes')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status === 200)
        .map(response => actions.uploadUnsavedRoutesSuccess(response));

    return {
        ACTION: httpResponse$,
        HTTP: request$
    }
}

export function requestUploadUnsavedRoutesFailed(sources) {
    let httpResponse$ = sources.HTTP
        .select('requestUploadUnsavedRoutes')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status !== 200)
        .map(response => actions.uploadUnsavedRoutesFailed(response));

    return {
        ACTION: httpResponse$
    }
}

export function requestUploadedRoutes(sources) {
    const state$ = sources.STATE;
    const token$ = state$.map(state => state.loggedInPerson.id);

    const request$ = sources.ACTION
        .filter(action => action.type === ActionTypes.FETCH_UPLOADED_ROUTES)
        .compose(sampleCombine(token$))
        .map(([action, token]) => ({
            url: BASE_URL + 'api/routes' + (action.payload.query ?
                `?filter=${JSON.stringify(action.payload.query)}` : ""),
            category: 'requestUploadedRoutes',
            method: 'GET',
            headers: {Authorization: token}
        }));

    let httpResponse$ = sources.HTTP
        .select('requestUploadedRoutes')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status === 200)
        .map(response => actions.fetchUploadedRoutesSuccess(response));

    return {
        ACTION: httpResponse$,
        HTTP: request$
    }
}

export function requestUploadedRoutesFailed(sources) {
    let httpResponse$ = sources.HTTP
        .select('requestUploadedRoutes')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status !== 200)
        .map(response => actions.fetchUploadedRoutesFailed(response));

    return {
        ACTION: httpResponse$
    }
}