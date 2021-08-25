import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import SurveyComponent from '../../Component/Survey';
import { DispatchFetchQuestion } from './action';

function Survey({ questions, dispatchFetchQuestion }) {
	useEffect(() => {
		if (
			questions.isDataFetched === undefined ||
			questions.isDataFetched === false
		) {
			dispatchFetchQuestion();
		}
	});

	return <SurveyComponent questions={questions} />;
}

function mapStateToProps(state) {
	return {
		questions: state.surveyReducer
	};
}

export default connect(mapStateToProps, {
	dispatchFetchQuestion: DispatchFetchQuestion
})(Survey);
