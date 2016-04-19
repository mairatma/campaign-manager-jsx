'use strict';

import ActionTypes from '../actions/ActionTypes';

function sourceUrl(state, action) {
	switch (action.type) {
		case ActionTypes.START_CAMPAIGN_CREATION:
		case ActionTypes.START_CAMPAIGN_EDITION:
			return action.sourceUrl || '/';
	}
	return state || '/';
}

export default sourceUrl;
