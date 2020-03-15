/* @flow */
// import immutableCheckMiddleWare from 'redux-immutable-state-invariant';
import { applyMiddleware, compose, createStore } from 'redux';
import {createLogger} from 'redux-logger';
import reducers from '../reducers';
import { makeHTTPDriver } from '@cycle/http';
import main from '../cycles/cycles';
import { createCycleMiddleware } from 'redux-cycles';
import { run } from '@cycle/run';
import Reactotron from 'reactotron-react-native';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const middleWare = [];

const cycleMiddleware = createCycleMiddleware();

const { makeActionDriver, makeStateDriver } = cycleMiddleware;

let store = undefined;

const persistConfig = {
    key: 'ctxmobile',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const logger = createLogger({
    // ...options
});

middleWare.push(cycleMiddleware);

// TODO: Set in production when app is ready!
if (process.env.NODE_ENV === 'development') {
    // middleWare.push(logger);

    // XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
    //     GLOBAL.originalXMLHttpRequest :
    //     GLOBAL.XMLHttpRequest;

    store = Reactotron.createStore(  // eslint-disable-line
        persistedReducer,
        compose(applyMiddleware(...middleWare)),
    );
} else {
    store = createStore( // eslint-disable-line
        persistedReducer,
        compose(applyMiddleware(...middleWare)),
    );
}

export const persistor = persistStore(store);

run(main, {
    ACTION: makeActionDriver(),
    STATE: makeStateDriver(),
    HTTP: makeHTTPDriver()
});
export default store;