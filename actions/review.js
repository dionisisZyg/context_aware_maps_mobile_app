import * as ActionTypes from './types';
import {actionCreator} from "../utils/functions";

export const createReview = actionCreator(ActionTypes.CREATE_REVIEW);

export const createReviewSuccess = actionCreator(ActionTypes.CREATE_REVIEW_SUCCESS);

export const createReviewFailed = actionCreator(ActionTypes.CREATE_REVIEW_FAILED);
