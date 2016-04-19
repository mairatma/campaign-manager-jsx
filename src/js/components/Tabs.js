'use strict';

import Component from 'metal-component';
import JSX from 'metal-jsx';

class Tabs extends Component {
	render() {
		var items = this.props.tabs.map((tab, index) => {
			return <li class={this.props.selectedIndex == index ? 'active' : ''}>
				<a href={tab.href}>{tab.name}</a>
			</li>
		});
		return <ul class="campaign-manager-tabs nav nav-tabs">{items}</ul>;
	}
}
JSX.register(Tabs);

export default Tabs;
