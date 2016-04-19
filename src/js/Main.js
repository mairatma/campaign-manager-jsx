'use strict';

import store from './store/store';
import Actions from './actions/Actions';
import Dashboard from './components/pages/Dashboard';
import EditCampaign from './components/pages/EditCampaign';
import ManageCampaigns from './components/pages/ManageCampaigns';
import Router from 'metal-router';

class Main {
	static run(opt_data = {}) {
		store.dispatch(Actions.updateState(opt_data));

		var basePath = store.getState().basePath;
		Router.router().setBasePath(basePath);
		Router.route('/dashboard', Dashboard, store.getState, true);
		Router.route('/manage-campaigns', ManageCampaigns, store.getState, true);
		Router.route('/create-campaign', EditCampaign, store.getState, true);
		Router.route(/\/edit-campaign(\/\d*)?/, EditCampaign, store.getState, true);
		Router.router().navigate(basePath + '/dashboard', true);

		store.subscribe(Main.refreshState);
		return this;
	}

	static refreshState() {
		Router.activeComponent.setState(store.getState());
	}
}

export default Main;
