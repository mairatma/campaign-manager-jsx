'use strict';

import ActionTypes from './ActionTypes';

export default {
	saveCampaign(campaign) {
		return {
			type: ActionTypes.SAVE_CAMPAIGN,
			campaign: campaign
		};
	},

	startCampaignCreation(sourceUrl) {
		return {
			type: ActionTypes.START_CAMPAIGN_CREATION,
			sourceUrl: sourceUrl
		};
	},

	startCampaignEdition(id, sourceUrl) {
		return {
			type: ActionTypes.START_CAMPAIGN_EDITION,
			id: id,
			sourceUrl: sourceUrl
		};
	},

	removeCampaign(id) {
		return {
			type: ActionTypes.REMOVE_CAMPAIGN,
			id: id
		};
	},

	updateState(state) {
		return {
			type: ActionTypes.UPDATE_DATA,
			state: state
		};
	}
};
