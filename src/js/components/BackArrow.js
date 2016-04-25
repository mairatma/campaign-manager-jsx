'use strict';

import JSXComponent from 'metal-jsx';

class BackArrow extends JSXComponent {
	render() {
		return <a href={this.config.basePath + this.config.sourceUrl} class="back-arrow">
			<span class="glyphicon glyphicon-menu-left"></span>
		</a>;
	}
}

export default BackArrow;
