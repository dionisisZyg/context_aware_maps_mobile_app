import { createReducer } from './index';
import * as ActionTypes from '../actions/types';
import {generalToast} from "../utils/toasts";

const INITIAL_STATE = {
    loggingIn: false,
    loggingInResponseMessage: '',
    loggingOut: false,
    token: '',
    username: '',
    email: '',
    roles: [],
    id: '', //the loopback token,
    userId: null,
    departmentId: '',
    signingUp: false
};

function login(state) {
    return {
        ...state,
        loggingIn: true
    }
}

function loginSuccess(state, action) {
    try {
        return {
            ...state,
            loggingIn: false,
            username: action.payload.body.username,
            email: action.payload.body.email,
            roles: action.payload.body.roles,
            token: action.payload.body.token,
            userId: action.payload.body.userId,
            id: action.payload.body.id,

        };
    }
    catch (e) {
        return {
            ...state,
            loggingIn: false
        }
    }
}

function loginFail(state, action) {
    let msg = '';
    try {
        msg = action.payload.response.body.error.message;
    } catch (e) {
        msg = 'Failed to log in.'
    }
    generalToast(msg, {buttonText: 'Ok'});
    return {
        ...state,
        loggingIn: false,
        loggingInResponseMessage: msg
    }

}

function changeUserStoreSettings(state, action) {
    return {
        ...state,
        [action.payload.key]: action.payload.value
    }
}

function logout(state, action) {
    return {
        ...INITIAL_STATE,
        loggingOut: true
    }
}

function logoutSuccess(state, action) {
    return  {
        ...INITIAL_STATE,
        loggingOut: false
    }
}

function logoutFail(state, action) {
    return {
        ...INITIAL_STATE,
        loggingOut: false
    }
}

function signUp(state, action) {
    return {
        ...state,
        signingUp: true
    };
}

function signUpSuccess(state, action) {
    generalToast('Account was created successfully');
    return {
        ...state,
        signingUp: false
    };
}

function signUpFailed(state, action) {
    generalToast('Failed to create account');
    return {
        ...state,
        signingUp: false
    };
}

export const loggedInPerson = createReducer(INITIAL_STATE, {
    [ActionTypes.LOGIN]: login,
    [ActionTypes.LOGIN_SUCCESS]: loginSuccess,
    [ActionTypes.LOGIN_FAIL]: loginFail,
    [ActionTypes.CHANGE_USER_STORE_SETTINGS]: changeUserStoreSettings,
    [ActionTypes.LOG_OUT]: logout,
    [ActionTypes.lOG_OUT_SUCCESS]: logoutSuccess,
    [ActionTypes.LOG_OUT_FAIL]: logoutFail,

    [ActionTypes.SIGN_UP]: signUp,
    [ActionTypes.SIGN_UP_SUCCESS]: signUpSuccess,
    [ActionTypes.SIGN_UP_FAILED]: signUpFailed,
});
