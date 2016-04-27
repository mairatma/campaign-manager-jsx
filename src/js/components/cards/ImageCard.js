'use strict';

import Card from './Card';
import JSXComponent from 'metal-jsx';

class ImageCard extends JSXComponent {
	render() {
		return <div class="campaign-manager-image-card">
			<Card>
				<div class="campaign-manager-card-title">
					{this.config.title}
					<span class="highlight count">{this.config.count}</span>
				</div>
				<div>
					<img src={this.config.imageUrl} />
				</div>
			</Card>
		</div>;
	}
}

export default ImageCard;
