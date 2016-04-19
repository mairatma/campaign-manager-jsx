'use strict';

import core from 'metal';
import Component from 'metal-component';
import JSX from 'metal-jsx';

class Card extends Component {
	render() {
		return <div class={'campaign-manager-card ' + (this.props.cssClass || '')}>
			<div class="campaign-manager-card-body clearfix">
				{this.props.children()}
			</div>
		</div>;
	}
}
JSX.register(Card);

export default Card;
