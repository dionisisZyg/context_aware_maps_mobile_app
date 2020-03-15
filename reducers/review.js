import * as ActionTypes from '../actions/types';
import { createReducer } from './index';
import {generalToast} from "../utils/toasts";

const INITIAL_STATE ={
    posting: false,
};

function createReview(state, action) {
    return {
        ...state,
        posting: true,
    }
}

function createReviewSuccess(state, action) {
    return {
        ...state,
        posting: false,
    }
}

function createReviewFailed(state, action) {
    generalToast('Failed to create review.', {buttonText: 'Ok'});
    return {
        ...state,
        posting: false,
    }
}

export const review = createReducer(INITIAL_STATE, {
    [ActionTypes.CREATE_REVIEW]: createReview,
    [ActionTypes.CREATE_REVIEW_SUCCESS]: createReviewSuccess,
    [ActionTypes.CREATE_REVIEW_FAILED]: createReviewFailed,
});
