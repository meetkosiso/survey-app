import { FETCH_SURVEY_FAILED, FETCH_SURVEY_SUCCESSFUL } from './types';

export default function Survey(states = {}, action = {}) {
	switch (action.type) {
		case FETCH_SURVEY_SUCCESSFUL:
			if (action.payload === undefined) {
				return { ...states, isDataFetched: false };
			}
			return { ...states, data: action.payload, isDataFetched: true };
		case FETCH_SURVEY_FAILED:
			return { ...states, isDataFetched: false };
		default:
			return states;
	}
}
