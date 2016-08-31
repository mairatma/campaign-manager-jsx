'use strict';

import core from 'metal';
import JSXComponent from 'metal-jsx';
import TacticsTable from '../table/TacticsTable';

class EditCampaignTactics extends JSXComponent {
	render() {
		var editMode = core.isDefAndNotNull(this.props.editCampaignId);
		var campaign = editMode ? this.props.campaigns[this.props.editCampaignId] : {};

		return <div class="campaign-manager-edit-campaign-tactics container-fluid campaign-manager white-bg session session-merged-next">
			<h2>Tactics</h2>
			<div class="session-description">
				<p>
					<b>What are tactics? </b>
					<em>
						Tactics are the different ways to achive your marketing goals. They
						usually include publishing destinations like landing pages or blog,
						defining broadcast prmotion on social media or via personalized
						banner ads in your webs and also one to one promotions like emails,
						SMS or Push notifications to the right audience.
					</em>
				</p>
			</div>

			<TacticsTable
				destinations={this.props.destinations}
				selectedTacticIds={this.props.selectedTacticIds}
				tactics={this.props.tactics}
			/>
			<input
				type="hidden"
				value={this.props.selectedTacticIds.join(',')}
				name="tacticIds"
			/>
		</div>;
	}
}

export default EditCampaignTactics;
