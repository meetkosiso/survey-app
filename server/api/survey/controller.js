import questions from '../../../data/questions.json';

export function fetchQuestion(req, res) {
	return res.jsend.success(questions.data);
}
