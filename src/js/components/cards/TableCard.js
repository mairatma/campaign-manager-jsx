'use strict';

import Card from './Card';
import JSXComponent from 'metal-jsx';

class TableCard extends JSXComponent {
	render() {
		return <div class="campaign-manager-table-card">
			<Card children={this.renderContent_.bind(this)} />
		</div>;
	}

	renderContent_() {
		var headers = this.config.headers.map((header, index) => {
			return <th class={'light-gray' + (index === 0 ? '' : ' text-center')}>
				{header}
			</th>
		});
		var data = this.config.data.map(row => {
			var cells = row.map((cell, index) => {
				return <td class={index === 0 ? '' : 'text-center'}>{cell}</td>;
			});
			return <tr>{cells}</tr>;
		});
		return <div>
			<div class="campaign-manager-card-title">{this.config.title}</div>
			<table class="table table-clean">
				<thead>
					<tr>{headers}</tr>
				</thead>
				<tbody>{data}</tbody>
			</table>
		</div>;
	}
}

export default TableCard;
