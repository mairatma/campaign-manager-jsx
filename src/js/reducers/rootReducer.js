'use strict';

import ActionTypes from '../actions/ActionTypes';
import campaigns from './campaigns';
import editCampaignId from './editCampaignId';
import sourceUrl from './sourceUrl';

function basePath(state) {
	return state || '';
}

function baseResourceUrl(state) {
	return state || '/';
}

function destinations(state) {
	return state || [];
}

function audiences(state) {
	return state || [];
}

function banners(state) {
	return state || [];
}

function displays(state) {
	return state || [];
}

function tactics(state) {
	return state || [];
}

var combined = Redux.combineReducers({
	basePath,
	baseResourceUrl,
	campaigns,
	editCampaignId,
	destinations,
	audiences,
	banners,
	displays,
	tactics,
	sourceUrl
});

function rootReducer(state, action) {
	switch (action.type) {
		case ActionTypes.UPDATE_DATA:
			return action.state;
	}
	return combined(state, action);
}

export default rootReducer;
