'use strict';

import Component from 'metal-component';
import JSX from 'metal-jsx';

class BackArrow extends Component {
	render() {
		return <a href={this.props.basePath + this.props.sourceUrl} class="back-arrow">
			<span class="glyphicon glyphicon-menu-left"></span>
		</a>;
	}
}
JSX.register(BackArrow);

export default BackArrow;
