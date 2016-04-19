'use strict';

import ActionTypes from '../actions/ActionTypes';

function editCampaignId(state, action) {
	switch (action.type) {
		case ActionTypes.START_CAMPAIGN_EDITION:
			return action.id;
		case ActionTypes.START_CAMPAIGN_CREATION:
			return null;
	}
	return state || null;
}

export default editCampaignId;
