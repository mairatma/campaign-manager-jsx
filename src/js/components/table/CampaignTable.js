'use strict';

import dom from 'metal-dom';
import store from '../../store/store';
import templates from './CampaignTable.soy';
import Actions from '../../actions/Actions';
import Component from 'metal-component';
import Soy from 'metal-soy';

class CampaignTable extends Component {
	edit_(event) {
		var id = this.getRowId_(event);
		store.dispatch(Actions.startCampaignEdition(id, this.currentUrl));
	}

	getRowId_(event) {
		return parseInt(dom.parent(event.target, 'tr').getAttribute('data-id'), 10);
	}

	remove_(event) {
		var id = this.getRowId_(event);
		store.dispatch(Actions.removeCampaign(id));
	}
}
Soy.register(CampaignTable, templates);

CampaignTable.STATE = {
	currentUrl: {
	}
};

export default CampaignTable;
