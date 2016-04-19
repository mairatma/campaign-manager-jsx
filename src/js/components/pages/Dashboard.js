'use strict';

import templates from './Dashboard.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

import '../Header.soy';
import '../cards/Card.soy';
import '../cards/ImageCard.soy';
import '../cards/TableCard.soy';

class Dashboard extends Component {
	created() {
		this.on('campaignsChanged', this.updateCampaignStatistics_);
		this.updateCampaignStatistics_();
	}

	addDots_(number) {
		var str = number.toString();
		var finalStr = '';

		for (var i = 0; i < str.length; i++) {
			if (i > 0 && i < str.length - 1 && (i % 3 === str.length % 3)) {
				finalStr += '.';
			}
			finalStr += str[i];
		}
		return finalStr;
	}

	sum_(name) {
		return this.campaigns.reduce((prev, curr) => prev + curr[name], 0);
	}

	updateCampaignStatistics_() {
		this.totalInfluencedWins = this.addDots_(this.sum_('influencedWins'));
		this.totalInfluencedCustomers = this.sum_('influencedCustomers');
		this.totalLeadsCount = this.sum_('leadsCount');
		this.totalBudget = this.addDots_(this.sum_('budget'));
	}
}
Soy.register(Dashboard, templates);

export default Dashboard;
