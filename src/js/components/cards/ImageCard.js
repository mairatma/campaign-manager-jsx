'use strict';

import Component from 'metal-component';
import JSX from 'metal-jsx';

import './Card';

class ImageCard extends Component {
	render() {
		return <div class="campaign-manager-image-card">
			<Card children={this.renderContent_.bind(this)} />
		</div>;
	}

	renderContent_() {
		return <div>
			<div class="campaign-manager-card-title">
				{this.props.title}
				<span class="highlight count">{this.props.count}</span>
			</div>
			<div>
				<img src={this.props.imageUrl} />
			</div>
		</div>;
	}
}
JSX.register(ImageCard);

export default ImageCard;
