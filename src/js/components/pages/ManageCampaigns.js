'use strict';

import core from 'metal';
import CampaignTable from '../table/CampaignTable';
import Card from '../cards/Card';
import Header from '../Header';
import JSXComponent from 'metal-jsx';
import Search from '../search/Search';

class ManageCampaigns extends JSXComponent {
	filterCampaigns_() {
		return this.props.campaigns
			.filter(campaign => {
				return !this.state.searchBy ||
					campaign.name.toLowerCase().startsWith(this.state.searchBy.toLowerCase());
			})
			.sort((c1, c2) => {
				if (this.state.sortBy === 'date') {
					var start = this.toDate_(c1.startDate) - this.toDate_(c2.startDate);
					return start !== 0 ? start : this.toDate_(c1.endDate) - this.toDate_(c2.endDate);
				} else {
					return c1.name.localeCompare(c2.name);
				}
			});
	}

	render() {
		return <div class="campaign-manager container-fluid">
			<div class="campaign-manager-manage-campaigns">
				<Header currentUrl={this.props.currentUrl} basePath={this.props.basePath} />
				<div class="row">
					<div class="col-md-4"></div>
					<div class="col-md-4">
						<Search onInput={this.search_.bind(this)} />
					</div>
				</div>
				<Card>
					<div class="form-inline select pull-right">
						<label>View Mode:</label>
						<select class="form-control">
							<option value="name">List</option>
						</select>
					</div>
					<div class="form-inline select">
						<label>Order by:</label>
						<select class="form-control" data-onchange={this.sort_.bind(this)}>
							<option value="name">Name</option>
							<option value="date">Scheduled Date</option>
						</select>
					</div>
					<CampaignTable
						basePath={this.props.basePath}
						campaigns={this.filterCampaigns_()}
						currentUrl={this.props.currentUrl}
					/>
				</Card>
			</div>
		</div>;
	}

	search_(event) {
		this.state.searchBy = event.target.value;
	}

	sort_(event) {
		this.state.sortBy = event.target.value;
	}

	toDate_(obj) {
		return new Date(obj.year, obj.month, obj.date, obj.hours, obj.minutes);
	}
}

ManageCampaigns.STATE = {
	searchBy: {
		validator: core.isString
	},
	sortBy: {
		validator: core.isString
	}
};

export default ManageCampaigns;
