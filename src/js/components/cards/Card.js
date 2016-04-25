'use strict';

import core from 'metal';
import JSXComponent from 'metal-jsx';

class Card extends JSXComponent {
	render() {
		return <div class={'campaign-manager-card ' + (this.props.cssClass || '')}>
			<div class="campaign-manager-card-body clearfix">
				{this.props.children()}
			</div>
		</div>;
	}
}

export default Card;
