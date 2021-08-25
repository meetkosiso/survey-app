import React from 'react';
import Header from './Header';

function Message({ title, content }) {
	return (
		<div className="main-container">
			<Header />
			<div className="content">
				<div className="sub-content">
					<p className="sub-content-child" id="content-message-title">
						{title}
					</p>
					<p className="sub-content-child question-title">{content}</p>
				</div>
			</div>
		</div>
	);
}

export default Message;
