import request from 'supertest';
import app from '../app';

const agent = request.agent(app);

describe('API Test', () => {
	it('should fetch all questions successfully', () => {
		return agent
			.get('/api/survey/question')
			.set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.expect(200)
			.then(response => {
				expect(response.body.data.length).toBeGreaterThan(0);
			});
	});
});
