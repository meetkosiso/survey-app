import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';

import Message from '../../Common/Message';

test('renders message component without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Message />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test('renders message component correctly', () => {
	render(<Message title="Message Component" />);
	const linkElement = screen.getByText(/Message Component/i);
	expect(linkElement).toBeInTheDocument();
});
