'use strict';

import dom from 'metal-dom';
import JSXComponent from 'metal-jsx';

class TacticsTable extends JSXComponent {
	remove_() {
		var row = parseInt(dom.parent(event.target, 'tr').getAttribute('data-row'), 10);
		var tacticIds = this.props.selectedTacticIds.concat();
		tacticIds.splice(row, 1);
		this.props.selectedTacticIds = tacticIds;
	}

	render() {
		return <div class="campaign-manager-tactics-table campaign-manager-table">
			<table class="table table-box">
				<thead>
					<tr>
						<th class="light-gray">Name</th>
						<th class="light-gray">Destination</th>
						<th class="light-gray">Promos</th>
						<th class="light-gray">Audience</th>
						<th class="light-gray">Banners</th>
						<th class="light-gray">Remove</th>
					</tr>
				</thead>
				<tbody>{this.renderRows_()}</tbody>
			</table>
		</div>;
	}

	renderRows_() {
		return this.props.selectedTacticIds.map((id, index) => {
			return <tr data-row={index}>
				<td>
					<span>
						{this.props.destinations[this.props.tactics[id].destinationId].name}
					</span>
				</td>
				<td><span>{this.props.tactics[id].name}</span></td>
				<td>
					<span
						class={(this.props.tactics[id].oneToOnePromos.length > 0) ? 'glyphicon glyphicon-ok' : ''}>
					</span>
				</td>
				<td>
					<span
						class={(this.props.tactics[id].oneToOnePromos.length > 0) ? 'glyphicon glyphicon-ok' : ''}>
					</span>
				</td>
				<td>
					<span
						class={(this.props.tactics[id].promotionalAds.length > 0) ? 'glyphicon glyphicon-ok' : ''}>
					</span>
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

TacticsTable.PROPS = {
	selectedTacticIds: {
		validator: Array.isArray
	}
};

export default TacticsTable;
