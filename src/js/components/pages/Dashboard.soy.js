/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Dashboard.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Dashboard.
 * @public
 */

goog.module('Dashboard.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias2 = Soy.getTemplate('Card.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('Header.incrementaldom', 'render');

var $templateAlias3 = Soy.getTemplate('ImageCard.incrementaldom', 'render');

var $templateAlias4 = Soy.getTemplate('TableCard.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'campaign-manager container-fluid');
    ie_open('div', null, null,
        'class', 'campaign-manager-dashboard');
      $templateAlias1({currentUrl: opt_data.currentUrl, includeAddCampaignButton: true, includeTabs: true}, null, opt_ijData);
      ie_open('div', null, null,
          'class', 'row');
        ie_open('div', null, null,
            'id', 'campaign-manager-active-card',
            'class', 'col-md-4 campaign-manager-card-wrapper');
          var param167 = function() {
            ie_open('div', null, null,
                'class', 'col-md-4');
              ie_open('img', null, null,
                  'src', opt_data.baseUrl + 'images/target.png',
                  'height', '100');
              ie_close('img');
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-md-8');
              ie_open('div', null, null,
                  'class', 'highlight big');
                itext((goog.asserts.assert((opt_data.campaigns.length) != null), opt_data.campaigns.length));
              ie_close('div');
              ie_open('div', null, null,
                  'class', 'campaign-manager-card-label');
                itext('Active Campaigns');
              ie_close('div');
            ie_close('div');
          };
          $templateAlias2({children: param167, key: 'card0', cssClass: 'clearfix'}, null, opt_ijData);
        ie_close('div');
        ie_open('div', null, null,
            'id', 'campaign-manager-amount-card',
            'class', 'col-md-4 campaign-manager-group campaign-manager-card-wrapper');
          var param177 = function() {
            ie_open('div', null, null,
                'class', 'col-md-6');
              ie_open('div', null, null,
                  'class', 'campaign-manager-amount-value');
                ie_open('span', null, null,
                    'class', 'highlight');
                  itext((goog.asserts.assert((opt_data.totalInfluencedWins) != null), opt_data.totalInfluencedWins));
                ie_close('span');
                ie_open('span', null, null,
                    'class', 'light-gray');
                  itext('$');
                ie_close('span');
              ie_close('div');
              ie_open('div', null, null,
                  'class', 'campaign-manager-card-label');
                itext('Influenced wins');
              ie_close('div');
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-md-6');
              ie_open('div', null, null,
                  'class', 'campaign-manager-amount-value');
                ie_open('span', null, null,
                    'class', 'highlight');
                  itext((goog.asserts.assert((opt_data.totalBudget) != null), opt_data.totalBudget));
                ie_close('span');
                ie_open('span', null, null,
                    'class', 'light-gray');
                  itext('$');
                ie_close('span');
              ie_close('div');
              ie_open('div', null, null,
                  'class', 'campaign-manager-card-label');
                itext('Total assigned budget');
              ie_close('div');
            ie_close('div');
          };
          $templateAlias2({children: param177, key: 'card1-0', cssClass: 'clearfix'}, null, opt_ijData);
        ie_close('div');
        ie_open('div', null, null,
            'id', 'campaign-manager-leads-card',
            'class', 'col-md-4 campaign-manager-card-wrapper');
          var param187 = function() {
            ie_open('div', null, null,
                'class', 'col-md-5');
              ie_open('div', null, null,
                  'class', 'highlight big');
                itext((goog.asserts.assert((opt_data.totalLeadsCount) != null), opt_data.totalLeadsCount));
              ie_close('div');
              ie_open('p', null, null,
                  'class', 'campaign-manager-card-label');
                itext('Total leads');
                ie_open('span');
                  itext('(Lead Cost 1.26%)');
                ie_close('span');
              ie_close('p');
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-md-2 hidden-sm campaign-manager-card-people');
              ie_open('img', null, null,
                  'src', opt_data.baseUrl + 'images/people.png');
              ie_close('img');
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-md-5');
              ie_open('div', null, null,
                  'class', 'highlight big');
                itext((goog.asserts.assert((opt_data.totalInfluencedCustomers) != null), opt_data.totalInfluencedCustomers));
              ie_close('div');
              ie_open('p', null, null,
                  'class', 'campaign-manager-card-label');
                itext('Influenced customers');
              ie_close('p');
            ie_close('div');
          };
          $templateAlias2({children: param187, key: 'card2', cssClass: 'clearfix'}, null, opt_ijData);
        ie_close('div');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'row row-destinations');
        ie_open('div', null, null,
            'class', 'col-md-4 campaign-manager-card-wrapper');
          $templateAlias3({count: 2894, imageUrl: opt_data.baseUrl + 'images/chart.png', title: 'Destinations views', key: 'card3'}, null, opt_ijData);
        ie_close('div');
        ie_open('div', null, null,
            'class', 'col-md-4 campaign-manager-card-wrapper');
          $templateAlias4({headers: ['Name', 'Views', 'CTR'], data: [['Destination name 001', '12k', '7%'], ['Destination name 001', '12k', '7%'], ['Destination name 001', '12k', '7%'], ['Destination name 001', '12k', '7%'], ['Destination name 001', '12k', '7%']], title: 'Top 5 Destinations', key: 'card4'}, null, opt_ijData);
        ie_close('div');
        ie_open('div', null, null,
            'class', 'col-md-4 campaign-manager-card-wrapper');
          $templateAlias3({count: 8934, imageUrl: opt_data.baseUrl + 'images/chartWithLabels.png', title: 'Destinations conversions', key: 'card5'}, null, opt_ijData);
        ie_close('div');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'row row-promotions');
        ie_open('div', null, null,
            'class', 'col-md-4 campaign-manager-card-wrapper');
          $templateAlias3({count: 2894, imageUrl: opt_data.baseUrl + 'images/chart.png', title: 'Banner Ads views', key: 'card6'}, null, opt_ijData);
        ie_close('div');
        ie_open('div', null, null,
            'class', 'col-md-4 campaign-manager-card-wrapper');
          $templateAlias4({headers: ['Name', '# Promotions', '# Reach', 'CTR'], data: [['SMS', '150', '150', '7%'], ['Email', '860', '860', '5%'], ['Push', '75', '260', '3%']], title: 'One to One promotions', key: 'card7'}, null, opt_ijData);
        ie_close('div');
        ie_open('div', null, null,
            'class', 'col-md-4 campaign-manager-card-wrapper');
          $templateAlias4({headers: ['Channel', '# Post', 'Reach', 'CTR'], data: [['Facebook', '150', '150', '7%'], ['Twitter', '150', '150', '7%'], ['LinkedIn', '150', '150', '7%']], title: 'Social Promotions', key: 'card8'}, null, opt_ijData);
        ie_close('div');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Dashboard.render';
}

exports.render.params = ["baseUrl","campaigns","currentUrl","totalInfluencedWins","totalInfluencedCustomers","totalLeadsCount","totalBudget"];
exports.render.types = {"baseUrl":"any","campaigns":"any","currentUrl":"any","totalInfluencedWins":"any","totalInfluencedCustomers":"any","totalLeadsCount":"any","totalBudget":"any"};
templates = exports;
return exports;

});

class Dashboard extends Component {}
Soy.register(Dashboard, templates);
export default templates;
export { Dashboard, templates };
/* jshint ignore:end */
