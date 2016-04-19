'use strict';

import Component from 'metal-component';
import JSX from 'metal-jsx';

class Search extends Component {
	render() {
		return <div class="input-group campaign-manager-search">
			<input
				type="text"
				class="form-control input-lg"
				placeholder="Search"
				value={this.props.value || ''}
				data-oninput={this.props.onInput}
			/>
			<div class="input-group-addon input-group-addon-clean">
				<span class="glyphicon glyphicon-search"></span>
			</div>
		</div>;
	}
}
JSX.register(Search);

export default Search;
