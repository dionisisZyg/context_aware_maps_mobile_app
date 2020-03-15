import * as ActionTypes from './types';
import {actionCreator} from "../utils/functions";

export const signUp =  actionCreator(ActionTypes.SIGN_UP);

export const signUpSuccess =  actionCreator(ActionTypes.SIGN_UP_SUCCESS);

export const signUpFailed =  actionCreator(ActionTypes.SIGN_UP_FAILED);

export function logout(payload) {
    return {
        type: ActionTypes.LOG_OUT,
        payload: payload
    }
}

export function logoutSuccess(payload) {
    return {
        type: ActionTypes.lOG_OUT_SUCCESS,
        payload: payload
    }
}

export function logoutFail(payload) {
    return {
        type: ActionTypes.LOG_OUT_FAIL,
        payload: payload
    }
}

export function login(payload) {
    return {
        type: ActionTypes.LOGIN,
        payload: payload
    }
}

export function loginSuccess(payload) {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: payload
    }
}

export function loginFail(payload) {
    return {
        type: ActionTypes.LOGIN_FAIL,
        payload: payload
    }
}

export function changeUserStoreSettings(payload) {
    return {
        type: ActionTypes.CHANGE_USER_STORE_SETTINGS,
        payload: payload
    }
}