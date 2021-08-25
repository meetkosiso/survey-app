import { FETCH_SURVEY_SUCCESSFUL } from '../../Container/Survey/types';
import { fetchQuestionSuccessful } from '../../Container/Survey/action';

test('Reducer', () => {
	const payload = {};
	const expectedAction = {
		type: FETCH_SURVEY_SUCCESSFUL,
		payload
	};
	expect(fetchQuestionSuccessful(payload)).toEqual(expectedAction);
});
