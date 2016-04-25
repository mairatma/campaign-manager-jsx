'use strict';

import core from 'metal';
import JSXComponent from 'metal-jsx';

class EditCampaignGoal extends JSXComponent {
	render() {
		var editMode = core.isDefAndNotNull(this.props.editCampaignId);
		var campaign = editMode ? this.props.campaigns[this.props.editCampaignId] : {};

		return <div class="campaign-manager-edit-campaign-goal container-fluid campaign-manager session">
			<div class="campaign-manager-card">
				<h2>Goal</h2>
				<div class="session-description">
				<p><em>Here you can define the goal of this stage. This will be used to generate smart reports in your campaign dashboard</em></p>
				</div>
			  <div class="form-group">
			    <div class="col-md-2">
			      <select class="form-control">
			        <option>Lead Generation</option>
			      </select>
			    </div>
			    <div class="col-md-2">
			      <input
							type="text"
							class="form-control"
							name="generation.count"
							value={campaign.goal ? campaign.goal.generation.count : 0}
						/>
			    </div>

			    <label for="" class="col-md-2 control-label"><div class="text-right">new contacts in: </div></label>
			    <div class="col-md-2">
			      <select class="form-control">
			        <option>2</option>
			      </select>
			    </div>
			    <div class="col-md-2">
			      <select class="form-control">
			        <option>Weeks</option>
			      </select>
			    </div>
			  </div>
			</div>
		</div>;
	}
}

export default EditCampaignGoal;
