'use strict';

import { core, object } from 'metal';
import store from '../../store/store';
import Actions from '../../actions/Actions';
import Component from 'metal-component';
import JSX from 'metal-jsx';

import '../edit/EditCampaignDetails';
import '../edit/EditCampaignGoal';

class EditCampaign extends Component {
	buildDate_(dateStr, time) {
		var date = new Date(dateStr ? dateStr : Date.now());
		date.setHours(time);
		return {
			date: date.getDate(),
			month: date.getMonth() + 1,
			year: date.getFullYear(),
			hours: date.getHours(),
			minutes: date.getMinutes()
		};
	}

	getData_() {
		var data = {};
		var namedFields = this.element.querySelectorAll('form [name]');
		for (var i = 0; i < namedFields.length; i++) {
			var name = namedFields[i].getAttribute('name');
			data[name] = namedFields[i].text ? namedFields[i].text : namedFields[i].value;
		}
		return data;
	}

	render() {
		var editMode = core.isDefAndNotNull(this.props.editCampaignId);
		var editCampaign =
			editMode ? this.props.campaigns[this.props.editCampaignId] : null;

		return <div class="campaign-manager-edit-campaign">
			<div class="container-fluid white-bg campaign-manager">
				<div class="campaign-manager-page-title">
					<BackArrow sourceUrl={this.props.sourceUrl} />
					<h1>
						{editMode ? 'Edit' : 'New'} Campaign
					</h1>
				</div>
			</div>

			<form class="form-horizontal">
				<EditCampaignDetails
					campaigns={this.props.campaigns}
					editCampaignId={this.props.editCampaignId}
				/>

				<div class="campaign-manager-edit-campaign-journey container-fluid white-bg campaign-manager session">
					<h2>Journey</h2>
					<div class="session-description">
						<p>
							<b>What's the journey? </b>
							<em>The journey defines the steps or stages of your campaign. If
								you don't have stages, just use the single step journey. If you
								are  using multi-step journeys you'll be able to define goals
								for each stage and program tactic that depend on information
								from the previous stage.
							</em>
						</p>
					</div>
					<div class="form-group">
						<label for="" class="col-md-1 control-label">Journey</label>
						<div class="col-md-2">
							<select class="form-control" name="journey">
								<option value="1">Sales Funnel</option>
							</select>
						</div>
						<div class="col-md-4">
							<a class="btn-manage-journey">Manage journeys</a>
						</div>
					</div>
				</div>

				<EditCampaignGoal
					campaigns={this.props.campaigns}
					editCampaignId={this.props.editCampaignId}
				/>

				<EditCampaignTactics
					destinations={this.props.destinations}
					selectedTacticIds={editCampaign ? editCampaign.tacticIds : []}
					tactics={this.props.tactics}
				/>

				<div class="container-fluid campaign-manager white-bg session">
					<div class="form-group">
						<div class="col-sm-10">
							<a
								href={this.props.sourceUrl}
								class="btn btn-lg btn-success"
								data-onclick={this.save_.bind(this)}>
								{editMode ? 'Save' : 'Create'} Campaign
							</a>
							<a href={this.props.sourceUrl} class="btn btn-lg btn-lighter">Cancel</a>
						</div>
					</div>
				</div>
			</form>
		</div>;
	}

	save_() {
		var data = this.getData_();
		store.dispatch(Actions.saveCampaign(object.mixin(data, {
			id: core.isNumber(this.props.editCampaignId) ? this.props.editCampaignId : undefined,
			budget: parseInt(data.budget, 10) || 0,
			startDate: this.buildDate_(data.startDate, data.startDateTime),
			endDate: this.buildDate_(data.endDate, data.endDateTime),
			goal: {
				generation: {
					count: data['generation.count']
				}
			},
			journey: parseInt(data.journey, 10),
			tacticIds: data.tacticIds.split(',').map(id => parseInt(id, 10)).filter(id => !!id)
		})));
	}
}
JSX.register(EditCampaign);

export default EditCampaign;
