import { FETCH_SURVEY_SUCCESSFUL, FETCH_SURVEY_FAILED } from './types';
import api from './api';

export const fetchQuestionSuccessful = data => ({
	type: FETCH_SURVEY_SUCCESSFUL,
	payload: data
});

export const fetchQuestionFailed = data => ({
	type: FETCH_SURVEY_FAILED,
	error: data
});

export const DispatchFetchQuestion = () => dispatch =>
	api
		.fetch()
		.then(response => dispatch(fetchQuestionSuccessful(response.data)))
		.catch(error => dispatch(fetchQuestionFailed(error)));
