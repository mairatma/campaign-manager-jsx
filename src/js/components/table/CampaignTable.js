'use strict';

import dom from 'metal-dom';
import store from '../../store/store';
import Actions from '../../actions/Actions';
import Component from 'metal-component';
import JSX from 'metal-jsx';

class CampaignTable extends Component {
	edit_(event) {
		var id = this.getRowId_(event);
		store.dispatch(Actions.startCampaignEdition(id, this.props.currentUrl));
	}

	getRowId_(event) {
		return parseInt(dom.parent(event.target, 'tr').getAttribute('data-id'), 10);
	}

	remove_(event) {
		var id = this.getRowId_(event);
		store.dispatch(Actions.removeCampaign(id));
	}

	render() {
		return <div class="campaign-manager-campaign-table campaign-manager-table">
			<table class="table table-box">
				<thead>
					<tr>
						<th class="light-gray">Name</th>
						<th class="light-gray">Scheduled Date</th>
						<th class="light-gray">Goal</th>
						<th class="light-gray">Edit</th>
						<th class="light-gray">Remove</th>
					</tr>
				</thead>
				<tbody>{this.renderRows_()}</tbody>
			</table>
		</div>;
	}

	renderDate_(date) {
		return {MONTHS[date.month - 1]} {date.date}, {date.year};
	}

	renderRows_() {
		return this.props.campaigns.map(campaign => {
			return <tr data-id={campaign.id}>
				<td><span>{campaign.name}</span></td>
				<td>
					<span>
						{this.renderDate_(campaign.startDate)} to {this.renderDate_(campaign.endDate)}
					</span>
				</td>
				<td>
					<span>Lead Generation - {campaign.goal.generation.count} new contacts in 2 weeks</span>
				</td>
				<td>
					<a href={'/edit-campaign/' + campaign.id} data-onclick={this.edit_.bind(this)}>
						<span class="glyphicon glyphicon-cog table-action-icon table-action-edit"></span>
					</a>
				</td>
				<td>
					<span
						class="glyphicon glyphicon-trash table-action-icon table-action-remove"
						data-onclick={this.remove_.bind(this)}>
					</span>
				</td>
			</tr>
		});
	}
}
JSX.register(CampaignTable);

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
	'August', 'September', 'October', 'November', 'December'];

export default CampaignTable;
