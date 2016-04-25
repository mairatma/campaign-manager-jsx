'use strict';

import core from 'metal';
import JSXComponent from 'metal-jsx';

class EditCampaignDetails extends JSXComponent {
	addLeading0(num) {
		return num < 10 ? ('0' + num) : num;
	}

	render() {
		var editMode = core.isDefAndNotNull(this.config.editCampaignId);
		var campaign = editMode ? this.config.campaigns[this.config.editCampaignId] : {};

		return <div class="campaign-manager-edit-campaign-details container-fluid white-bg campaign-manager session session-merged-next">
			<h2>Details</h2>
			<div class="form-group">
				<label for="" class="col-md-1 control-label">Name:</label>
				<div class="col-md-4">
					<input type="text" class="form-control" name="name" value={campaign.name || ''} />
				</div>
				<br class="hidden-md hidden-lg" />
				<label class="col-md-1 col-md-offset-2 control-label">Budget:</label>
				<div class="col-md-2">
					<input type="text" class="form-control" name="budget" value={campaign.budget || ''} />
				</div>
				<div class="col-md-2">
					<select class="form-control">
						<option>($) Dollars</option>
					</select>
				</div>
			</div>

			<div class="form-group">
				<label for="" class="col-md-1 control-label">Description:</label>
				<div class="col-md-11">
					<textarea class="form-control" rows="8" cols="40" name="description">
						{campaign.description || ''}
					</textarea>
				</div>
			</div>

			<div class="form-group">
				{this.renderDateFields_('Starts on:', 'startDate', campaign.startDate)}
				<br class="hidden-md hidden-lg" />
				<div class="col-md-2"></div>
				{this.renderDateFields_('Ends:', 'endDate', campaign.endDate)}
			</div>
		</div>;
	}

	renderDateFields_(label, inputName, date) {
		var timeOptions = [];
		for (var i = 0; i < 24; i++) {
			timeOptions.push(
				<option value={i} selected={(date && date.hours === i) || undefined}>
					{i > 12 ? i - 12 : i}:00 {i >= 12 ? 'PM' : 'AM'}
				</option>
			);
		}

		console.log('tried', inputName, date ? date.year + '-' + date.month + '-' + date.date : '');
		return <div>
			<label for="" class="col-md-1 control-label">{label}</label>
			<div class="col-md-2">
				<input
					type="date"
					class="form-control"
					name={inputName}
					value={date ? date.year + '-' + this.addLeading0(date.month) + '-' + this.addLeading0(date.date) : ''}
				/>
			</div>
			<div class="col-md-1">
				<select class="form-control" name={inputName + 'Time'}>{timeOptions}</select>
			</div>
			<div class="col-md-1">
				<select class="form-control">
					<option>GMT</option>
				</select>
			</div>
		</div>
	}
}

export default EditCampaignDetails;
