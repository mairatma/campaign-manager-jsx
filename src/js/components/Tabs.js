'use strict';

import JSXComponent from 'metal-jsx';

class Tabs extends JSXComponent {
	render() {
		var items = this.config.tabs.map((tab, index) => {
			return <li class={this.config.selectedIndex == index ? 'active' : ''}>
				<a href={tab.href}>{tab.name}</a>
			</li>
		});
		return <ul class="campaign-manager-tabs nav nav-tabs">{items}</ul>;
	}
}

export default Tabs;
