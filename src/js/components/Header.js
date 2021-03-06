'use strict';

import store from '../store/store';
import Actions from '../actions/Actions';
import JSXComponent from 'metal-jsx';
import Tabs from './Tabs';

class Header extends JSXComponent {
	render() {
		var tabs = [
			{
				name: 'Dashboard',
				href: this.props.basePath + '/dashboard'
			},
			{
				name: 'Manage Campaigns',
				href: this.props.basePath + '/manage-campaigns'
			}
		];

		return <div class="campaign-manager-header row">
			<div class="col-md-12">
				<a
					href={this.props.basePath + '/create-campaign'}
					class="btn btn-primary campaign-manager-button-new pull-right"
					data-onclick={this.startCampaignCreation_.bind(this)}>
					New Campaign
				</a>
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
		store.dispatch(Actions.startCampaignCreation(this.props.currentUrl));
	}
}

export default Header;
