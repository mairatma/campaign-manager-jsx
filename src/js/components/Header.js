'use strict';

import store from '../store/store';
import Actions from '../actions/Actions';
import Component from 'metal-component';
import JSX from 'metal-jsx';
import './Tabs';

class Header extends Component {
	render() {
		var tabs = [
			{
				name: 'Dashboard',
				href: '/dashboard'
			},
			{
				name: 'Manage Campaigns',
				href: '/manage-campaigns'
			}
		];

		return <div class="campaign-manager-header row">
			<div class="col-md-12">
				<a
					href="/create-campaign"
					class="btn btn-primary campaign-manager-button-new pull-right"
					data-onclick="startCampaignCreation_">
					New Campaign
				</button>
				<h4 class="campaign-manager-title campaign-manager-page-title">Campaign Manager</h4>
			</div>
			<div class="col-md-12">
				<Tabs
					tabs={tabs}
					selectedIndex={this.props.currentUrl == '/manage-campaigns' ? 1 : 0}
				/>
			</div>
		</div>;
	}

	startCampaignCreation_() {
		store.dispatch(Actions.startCampaignCreation(this.currentUrl));
	}
}
JSX.register(Header);

export default Header;