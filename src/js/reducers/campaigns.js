'use strict';

import { core, object } from 'metal';
import ActionTypes from '../actions/ActionTypes';

function campaigns(state, action) {
	switch (action.type) {
		case ActionTypes.REMOVE_CAMPAIGN:
			state = state.concat();
			state.splice(action.id, 1);
			return state;
		case ActionTypes.SAVE_CAMPAIGN:
			state = state.concat();
			if (core.isDefAndNotNull(action.campaign.id)) {
				state[action.campaign.id] = object.mixin(
					state[action.campaign.id],
					action.campaign
				);
			} else {
				state.push(object.mixin(action.campaign, {
					id: state.length,
					influencedCustomers: 0,
					influencedWins: 0,
					leadsCount: 0
				}));
			}
			return state;
	}
	return state || [];
}

export default campaigns;
