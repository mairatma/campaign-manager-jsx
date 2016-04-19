'use strict';

import templates from './Search.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Search extends Component {
	handleInput_(event) {
		this.value = event.delegateTarget.value;
	}
}
Soy.register(Search, templates);

export default Search;
