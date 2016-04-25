'use strict';

import Card from './Card';
import JSXComponent from 'metal-jsx';

class ImageCard extends JSXComponent {
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

export default ImageCard;
