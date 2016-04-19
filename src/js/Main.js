'use strict';

import store from './store/store';
import Actions from './actions/Actions';
import Dashboard from './components/pages/Dashboard';
import EditCampaign from './components/pages/EditCampaign';
import ManageCampaigns from './components/pages/ManageCampaigns';
import Router from 'metal-router';

class Main {
	static run(opt_data = {}, opt_baseUrl = '') {
		store.dispatch(Actions.updateState(opt_data));

		Router.router().setBasePath(opt_baseUrl);
		Router.route('/dashboard', Dashboard, store.getState, true);
		Router.route('/manage-campaigns', ManageCampaigns, store.getState, true);
		Router.route('/create-campaign', EditCampaign, store.getState, true);
		Router.route(/\/edit-campaign(\/\d*)?/, EditCampaign, store.getState, true);
		Router.router().navigate('/dashboard', true);

		store.subscribe(Main.refreshState);
		return this;
	}

	static refreshState() {
		Router.activeComponent.setState(store.getState());
	}
}

export default Main;
