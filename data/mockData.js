'use strict';

var data = {
	baseUrl: 'src/',
	campaigns: [
		{
			id: 0,
			name: 'University Credit Card',
			description: 'A credit card for university students',
			startDate: {
				date: 1,
				month: 2,
				year: 2016,
				hours: 13,
				minutes: 0
			},
			endDate: {
				date: 1,
				month: 3,
				year: 2016,
				hours: 23,
				minutes: 0
			},
			budget: 12000,
			goal: {
				'generation': {
					count: 10000
				},
				'nurturing': {
					count: 1000
				},
				'qualification': {
					count: 500
				}
			},
			journey: 1,
			tacticIds: [0],
			influencedCustomers: 100,
			influencedWins: 150000,
			leadsCount: 125
		},
		{
			id: 1,
			name: 'Promotions for the new iPhone i7',
			startDate: {
				date: 12,
				month: 2,
				year: 2016,
				hours: 7,
				minutes: 0
			},
			endDate: {
				date: 18,
				month: 2,
				year: 2016,
				hours: 21,
				minutes: 30
			},
			budget: 9000,
			goal: {
				'generation': {
					count: 9000
				},
				'nurturing': {
					count: 1200
				},
				'qualification': {
					count: 400
				}
			},
			journey: 1,
			tacticIds: [],
			influencedCustomers: 10,
			influencedWins: 10000,
			leadsCount: 22
		}
	],
	destinations: [
		{
			id: 0,
			name: 'Landing Page NAS 2016'
		},
		{
			id: 1,
			name: 'Madrid Symposium Form'
		},
		{
			id: 2,
			name: 'Liferay 7 Training Center'
		},
		{
			id: 3,
			name: 'Building Emotion Medium blog post'
		}
	],
	audiences: [
		{
			id: 0,
			name: 'CMO FinTec',
			description: 'This space is for the description content of the role'
		},
		{
			id: 1,
			name: 'CMO Retail',
			description: 'This space is for the description content of the role'
		},
		{
			id: 2,
			name: 'Italian CEOs Healthcare',
			description: 'This space is for the description content of the role'
		},
		{
			id: 3,
			name: 'Healthcare SysAdmins Europe',
			description: 'This space is for the description content of the role'
		}
	],
	banners: [
		{
			id: 0,
			name: 'NAS 2016',
			type: 1,
			author: 'Bryan Cheung',
			status: 1
		},
		{
			id: 1,
			name: 'Talking about Lexicon',
			type: 1,
			author: 'Juan Hidalgo',
			status: 1
		},
		{
			id: 2,
			name: 'Talking about Lexicon',
			type: 1,
			author: 'Juan Hidalgo',
			status: 1
		}
	],
	displays: [
		{
			id: 0,
			name: 'Home',
			source: 'Westeros Business',
			count: 1,
			sourceType: 0
		},
		{
			id: 1,
			name: 'Contact Us',
			source: 'Westeros Business',
			count: 1,
			sourceType: 0
		},
		{
			id: 2,
			name: 'Home',
			source: 'Westeros Investors',
			count: 1,
			sourceType: 0
		}
	],
	tactics: [
		{
			id: 0,
			name: 'Tactics named 0001',
			stages: {
				'generation': true,
				'nurturing': true
			},
			cost: 5000,
			destinationId: 0,
			oneToOnePromos: [
				{
					name: 'New credit card promo for students',
					audienceIds: [0, 1],
					date: {
						date: 20,
						month: 2,
						year: 2016
					}
				},
				{
					name: 'New credit card promo for homeowners',
					audienceIds: [1],
					date: {
						date: 22,
						month: 2,
						year: 2016
					}
				}
			],
			promotionalAds: [
				{
					name: 'Promotion of Liferay before NAS',
					audienceIds: [3, 4],
					bannerIds: [0],
					displayIds: [0, 2]
				}
			]
		},
		{
			id: 1,
			name: 'Tactics named 0002',
			stages: {
				'nurturing': true
			},
			cost: 2000,
			destinationId: 1,
			oneToOnePromos: [],
			promotionalAds: []
		}
	]
};

CM.store.dispatch(CM.Actions.updateState(data));
