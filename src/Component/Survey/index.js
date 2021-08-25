import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import Header from '../../Common/Header';
import Button from '../../Common/Button';
import Message from '../../Common/Message';

function Survey({ questions }) {
	const [question, setQuestion] = useState([]);
	const [count, setCount] = useState(0);
	const [nextButton, setNextButton] = useState('Next');
	const [selected, setSelected] = useState({});

	useEffect(
		function() {
			if (
				questions.isDataFetched !== undefined &&
				questions.isDataFetched === true
			) {
				setQuestion(questions.data);
			}
		},
		[questions]
	);

	if (questions.isDataFetched === undefined) {
		return <Message title="loading survey..." content="Please wait" />;
	}

	if (
		questions.isDataFetched !== undefined &&
		questions.isDataFetched === false
	) {
		return (
			<Message
				title="Oops, something went wrong"
				content="Please have patience, we are investigating"
			/>
		);
	}

	if (count === question.length) {
		return (
			<Message
				title="Thank you"
				content="We are happy that you completed the survey"
			/>
		);
	}

	const handleNext = () => {
		let number = count;

		number += 1;
		setCount(number);

		// determines when the questions has reached it's end
		if (number === question.length - 1) {
			setNextButton('Submit');
		}
	};

	const handleSelection = (optionIndex, questionId) => {
		const selectedOption = { ...selected };
		selectedOption[questionId] = optionIndex;
		setSelected(selectedOption);
	};

	const onChange = e => {
		return e.target.value;
	};

	const handlePrevious = () => {
		let number = count;
		if (number === 0) {
			return;
		}
		number -= 1;
		setCount(number);
		if (nextButton === 'Submit') {
			setNextButton('Next');
		}
	};

	const handleSkip = () => {
		let number = count;

		number += 1;
		setCount(number);
	};

	return (
		<div className="main-container">
			<Header />
			<div className="content">
				<div className="sub-content">
					<p className="sub-content-child" id="content-header">
						Question #{question.length > 0 && question[count].id}
					</p>
					<p className="sub-content-child question-title">
						{question.length > 0 && question[count].title}
					</p>
					<div className="sub-content-child form-input-container">
						{question.length > 0 &&
							question[count].options.map((option, index) => {
								const isSelected = index === selected[question[count].id];
								return (
									<div
										onClick={() => handleSelection(index, question[count].id)}
										onKeyDown={handleSelection}
										role="button"
										tabIndex={0}
										key={index}
										className={classnames('form-input', {
											'on-selected': isSelected
										})}
									>
										<input
											id={index}
											onChange={onChange}
											type="checkbox"
											checked={isSelected}
										/>
										<label className="form-label" htmlFor={index}>
											{option}
										</label>
									</div>
								);
							})}
					</div>
				</div>
			</div>
			<div className="footer">
				<Button
					buttonClass="normal-button"
					label="PREVIOUS"
					onPress={handlePrevious}
					optional={<i className="fa fa-chevron-left icons-left" />}
				/>
				<Button
					buttonClass="normal-button"
					onPress={handleSkip}
					disabled={selected[question[count].id] !== undefined}
					label="SKIP QUESTION"
				/>
				<Button
					buttonClass="action-button"
					disabled={selected[question[count].id] === undefined}
					label={
						nextButton === 'Submit' ? (
							''
						) : (
							<i className="fa fa-chevron-right icons-right" />
						)
					}
					onPress={handleNext}
					optional={nextButton}
				/>
			</div>
		</div>
	);
}

export default Survey;
