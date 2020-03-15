import { combineReducers } from 'redux';
import {route} from "./route";
import { reducer as form } from 'redux-form';
import {loggedInPerson} from "./loggedInPerson";
import {routeRecording} from "./routeRecording";
import {routes} from "./routes";
import storage from 'redux-persist/lib/storage'
import {LOG_OUT} from "../actions/types";
import {review} from "./review";
import {person} from "./person"; // defaults to localStorage for web

const appReducers = combineReducers({
    person,
    routeRecording,
    route,
    form,
    loggedInPerson,
    routes,
    review
});

export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
            return handlers[action.type](state, action);
        }
        return state;
    };
}

const reducers = (state, action) => {
    if (action.type === LOG_OUT) {
        storage.removeItem(`persist:ctxmobile`);
        state = undefined;
    }
    return appReducers(state, action);
};


export default reducers;
