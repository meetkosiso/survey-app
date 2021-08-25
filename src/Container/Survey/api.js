import axios from 'axios';

const surveyAPIInstance = {
	fetch: () =>
		axios
			.get('/api/survey/question')
			.then(response => response.data)
			.catch(err => err)
};

export default surveyAPIInstance;
