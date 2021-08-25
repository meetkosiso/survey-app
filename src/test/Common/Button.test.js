import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';

import Button from '../../Common/Button';

test('renders button without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Button />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test('renders button correctly', () => {
	render(<Button label="Click Me" />);
	const linkElement = screen.getByText(/Click Me/i);
	expect(linkElement).toBeInTheDocument();
});
