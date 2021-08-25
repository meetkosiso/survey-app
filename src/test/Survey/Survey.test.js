import { fireEvent, render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';

import SurveyComponent from '../../Component/Survey';

const mockData = {
	data: [
		{
			id: 1,
			title: 'How old are you?',
			options: ['16 or less', '16-29', '30-45', '45-60', '60 and more']
		},
		{
			id: 2,
			title: 'How often do you exercise?',
			options: ['Several times', '2 times a week', 'Never']
		}
	],
	isDataFetched: true
};

test('renders survey form without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<SurveyComponent questions={mockData} />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test('options should be selected successfully', () => {
	render(<SurveyComponent questions={mockData} />);
	const checkbox = screen.getByLabelText('16-29');

	fireEvent.click(checkbox);
	expect(checkbox).toBeChecked();
});

test('skip Question button should be disabled when an option is selected', () => {
	render(<SurveyComponent questions={mockData} />);
	const checkbox = screen.getByLabelText('16-29');
	const button = screen.getByText('SKIP QUESTION');
	fireEvent.click(checkbox);
	expect(button).toBeDisabled();
});

test('Skip Question button should be enabled when an option is not selected', () => {
	render(<SurveyComponent questions={mockData} />);
	const button = screen.getByText('SKIP QUESTION');
	expect(button).toBeEnabled();
});

test('Next button should be disabled when an option is not selected', () => {
	render(<SurveyComponent questions={mockData} />);
	const button = screen.getByText('Next');
	expect(button).toBeDisabled();
});

test('Next button should be enabled when an option is selected', () => {
	render(<SurveyComponent questions={mockData} />);
	const checkbox = screen.getByLabelText('16-29');
	const button = screen.getByText('Next');
	fireEvent.click(checkbox);
	expect(button).toBeEnabled();
});

test('Should move to the next question after an option is selected and next Button is clicked', () => {
	render(<SurveyComponent questions={mockData} />);
	const checkbox = screen.getByLabelText('16-29');
	fireEvent.click(checkbox);

	const button = screen.getByText('Next');
	fireEvent.click(button);

	const nextQuestion = screen.getByText('How often do you exercise?');
	expect(nextQuestion).toHaveTextContent('How often do you exercise?');
});
