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
				{this.config.title}
				<span class="highlight count">{this.config.count}</span>
			</div>
			<div>
				<img src={this.config.imageUrl} />
			</div>
		</div>;
	}
}

export default ImageCard;
