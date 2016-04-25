'use strict';

import Card from '../cards/Card';
import Header from '../Header';
import ImageCard from '../cards/ImageCard';
import JSXComponent from 'metal-jsx';
import TableCard from '../cards/TableCard';

class Dashboard extends JSXComponent {
	addDots_(number) {
		var str = number.toString();
		var finalStr = '';

		for (var i = 0; i < str.length; i++) {
			if (i > 0 && i < str.length - 1 && (i % 3 === str.length % 3)) {
				finalStr += '.';
			}
			finalStr += str[i];
		}
		return finalStr;
	}

	render() {
		return <div class="campaign-manager container-fluid">
			<div class="campaign-manager-dashboard">
				<Header currentUrl={this.config.currentUrl} basePath={this.config.basePath} />
				<div class="row">
					<div
						id="campaign-manager-active-card"
						class="col-md-4 campaign-manager-card-wrapper">
						<Card children={this.renderActiveCampaigns_.bind(this)} cssClass="clearfix" />
					</div>
					<div
						id="campaign-manager-amount-card"
						class="col-md-4 campaign-manager-group campaign-manager-card-wrapper">
						<Card children={this.renderWinsAndBudget_.bind(this)} cssClass="clearfix" />
					</div>
					<div
						id="campaign-manager-leads-card"
						class="col-md-4 campaign-manager-card-wrapper">
						<Card children={this.renderLeadsAndCustomers_.bind(this)} cssClass="clearfix" />
					</div>
				</div>

				<div class="row row-destinations">
					<div class="col-md-4 campaign-manager-card-wrapper">
						<ImageCard
							count={2894}
							imageUrl={this.config.baseResourceUrl + 'images/chart.png'}
							title="Destinations views"
						/>
					</div>
					<div class="col-md-4 campaign-manager-card-wrapper">
						<TableCard
							headers={['Name', 'Views', 'CTR']}
							data={[
								['Destination name 001', '12k', '7%'],
								['Destination name 001', '12k', '7%'],
								['Destination name 001', '12k', '7%'],
								['Destination name 001', '12k', '7%'],
								['Destination name 001', '12k', '7%']
							]}
							title="Top 5 Destinations"
						/>
					</div>
					<div class="col-md-4 campaign-manager-card-wrapper">
						<ImageCard
							count={2894}
							imageUrl={this.config.baseResourceUrl + 'images/chartWithLabels.png'}
							title="Destinations conversions"
						/>
					</div>
				</div>

				<div class="row row-promotions">
					<div class="col-md-4 campaign-manager-card-wrapper">
						<ImageCard
							count={2894}
							imageUrl={this.config.baseResourceUrl + 'images/chart.png'}
							title="Banner Ads views"
						/>
					</div>
					<div class="col-md-4 campaign-manager-card-wrapper">
						<TableCard
							headers={['Name', '# Promotions', '# Reach', 'CTR']}
							data={[
								['SMS', '150', '150', '7%'],
								['Email', '860', '860', '5%'],
								['Push', '75', '260', '3%']
							]}
							title="One to One promotions"
						/>
					</div>
					<div class="col-md-4 campaign-manager-card-wrapper">
						<TableCard
							headers={['Channel', '# Post', 'Reach', 'CTR']}
							data={[
								['Facebook', '150', '150', '7%'],
								['Twitter', '150', '150', '7%'],
								['LinkedIn', '150', '150', '7%']
							]}
							title="Social Promotions"
						/>
					</div>
				</div>
			</div>
		</div>;
	}

	renderActiveCampaigns_() {
		return <div>
			<div class="col-md-4">
				<img src={this.config.baseResourceUrl + 'images/target.png'} height="100" />
			</div>
			<div class="col-md-8">
				<div class="highlight big">{this.config.campaigns.length}</div>
				<div class="campaign-manager-card-label">Active Campaigns</div>
			</div>
		</div>;
	}

	renderLeadsAndCustomers_() {
		return <div>
			<div class="col-md-5">
				<div class="highlight big">{this.sum_('leadsCount')}</div>
				<p class="campaign-manager-card-label">
					Total leads
					<span>(Lead Cost 1.26%)</span>
				</p>
			</div>
			<div class="col-md-2 hidden-sm campaign-manager-card-people">
				<img src={this.config.baseResourceUrl + 'images/people.png'} />
			</div>
			<div class="col-md-5">
				<div class="highlight big">{this.sum_('influencedCustomers')}</div>
				<p class="campaign-manager-card-label">Influenced customers</p>
			</div>
		</div>;
	}

	renderWinsAndBudget_() {
		return <div>
			<div class="col-md-6">
				<div class="campaign-manager-amount-value">
					<span class="highlight">{this.addDots_(this.sum_('influencedWins'))}</span>
					<span class="light-gray">$</span>
				</div>
				<div class="campaign-manager-card-label">Influenced wins</div>
			</div>
			<div class="col-md-6">
				<div class="campaign-manager-amount-value">
					<span class="highlight">{this.addDots_(this.sum_('budget'))}</span>
					<span class="light-gray">$</span>
				</div>
				<div class="campaign-manager-card-label">Total assigned budget</div>
			</div>
		</div>;
	}

	sum_(name) {
		return this.config.campaigns.reduce((prev, curr) => prev + curr[name], 0);
	}
}

export default Dashboard;
