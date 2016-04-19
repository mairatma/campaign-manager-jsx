'use strict';

import dom from 'metal-dom';
import templates from './TacticsTable.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class TacticsTable extends Component {
	remove_() {
		var row = parseInt(dom.parent(event.target, 'tr').getAttribute('data-row'), 10);
		var tacticIds = this.selectedTacticIds.concat();
		tacticIds.splice(row, 1);
		this.selectedTacticIds = tacticIds;
	}
}
Soy.register(TacticsTable, templates);

export default TacticsTable;
