'use strict';

import { core, object } from 'metal';
import store from '../../store/store';
import templates from './EditCampaign.soy';
import Actions from '../../actions/Actions';
import Component from 'metal-component';
import Soy from 'metal-soy';

import '../edit/EditCampaignDetails.soy';
import '../edit/EditCampaignGoal.soy';

class EditCampaign extends Component {
	buildDate_(dateStr, time) {
		var date = new Date(dateStr ? dateStr : Date.now());
		date.setHours(time);
		return {
			date: date.getDate(),
			month: date.getMonth() + 1,
			year: date.getFullYear(),
			hours: date.getHours(),
			minutes: date.getMinutes()
		};
	}

	getData_() {
		var data = {};
		var namedFields = this.element.querySelectorAll('form [name]');
		for (var i = 0; i < namedFields.length; i++) {
			var name = namedFields[i].getAttribute('name');
			data[name] = namedFields[i].text ? namedFields[i].text : namedFields[i].value;
		}
		return data;
	}

	save() {
		var data = this.getData_();
		store.dispatch(Actions.saveCampaign(object.mixin(data, {
			id: core.isNumber(this.editCampaignId) ? this.editCampaignId : undefined,
			budget: parseInt(data.budget, 10) || 0,
			startDate: this.buildDate_(data.startDate, data.startDateTime),
			endDate: this.buildDate_(data.endDate, data.endDateTime),
			goal: {
				generation: {
					count: data['generation.count']
				}
			},
			journey: parseInt(data.journey, 10),
			tacticIds: data.tacticIds.split(',').map(id => parseInt(id, 10)).filter(id => !!id)
		})));
	}
}
Soy.register(EditCampaign, templates);

export default EditCampaign;
