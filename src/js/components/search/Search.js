'use strict';

import JSXComponent from 'metal-jsx';

class Search extends JSXComponent {
	render() {
		return <div class="input-group campaign-manager-search">
			<input
				type="text"
				class="form-control input-lg"
				placeholder="Search"
				value={this.config.value || ''}
				data-oninput={this.config.onInput}
			/>
			<div class="input-group-addon input-group-addon-clean">
				<span class="glyphicon glyphicon-search"></span>
			</div>
		</div>;
	}
}

export default Search;
