/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from CampaignTable.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace CampaignTable.
 * @public
 */

goog.module('CampaignTable.incrementaldom');

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


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'campaign-manager-campaign-table campaign-manager-table');
    ie_open('table', null, null,
        'class', 'table table-box');
      ie_open('thead');
        ie_open('tr');
          ie_open('th', null, null,
              'class', 'light-gray');
            itext('Name');
          ie_close('th');
          ie_open('th', null, null,
              'class', 'light-gray');
            itext('Scheduled Date');
          ie_close('th');
          ie_open('th', null, null,
              'class', 'light-gray');
            itext('Goal');
          ie_close('th');
          ie_open('th', null, null,
              'class', 'light-gray');
            itext('Edit');
          ie_close('th');
          ie_open('th', null, null,
              'class', 'light-gray');
            itext('Remove');
          ie_close('th');
        ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
        var MONTHS__soy283 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var campaignList305 = opt_data.campaigns;
        var campaignListLen305 = campaignList305.length;
        for (var campaignIndex305 = 0; campaignIndex305 < campaignListLen305; campaignIndex305++) {
          var campaignData305 = campaignList305[campaignIndex305];
          ie_open('tr', null, null,
              'data-id', campaignData305.id);
            ie_open('td');
              ie_open('span');
                itext((goog.asserts.assert((campaignData305.name) != null), campaignData305.name));
              ie_close('span');
            ie_close('td');
            ie_open('td');
              ie_open('span');
                itext((goog.asserts.assert((MONTHS__soy283[campaignData305.startDate.month - 1]) != null), MONTHS__soy283[campaignData305.startDate.month - 1]));
                itext(' ');
                itext((goog.asserts.assert((campaignData305.startDate.date) != null), campaignData305.startDate.date));
                itext(', ');
                itext((goog.asserts.assert((campaignData305.startDate.year) != null), campaignData305.startDate.year));
                itext(' to ');
                itext((goog.asserts.assert((MONTHS__soy283[campaignData305.endDate.month - 1]) != null), MONTHS__soy283[campaignData305.endDate.month - 1]));
                itext(' ');
                itext((goog.asserts.assert((campaignData305.endDate.date) != null), campaignData305.endDate.date));
                itext(', ');
                itext((goog.asserts.assert((campaignData305.endDate.year) != null), campaignData305.endDate.year));
              ie_close('span');
            ie_close('td');
            ie_open('td');
              ie_open('span');
                itext('Lead Generation - ');
                itext((goog.asserts.assert((campaignData305.goal.generation.count) != null), campaignData305.goal.generation.count));
                itext(' new contacts in 2 weeks');
              ie_close('span');
            ie_close('td');
            ie_open('td');
              ie_open('a', null, null,
                  'href', '/edit-campaign/' + campaignData305.id,
                  'data-onclick', 'edit_');
                ie_void('span', null, null,
                    'class', 'glyphicon glyphicon-cog table-action-icon table-action-edit');
              ie_close('a');
            ie_close('td');
            ie_open('td');
              ie_void('span', null, null,
                  'class', 'glyphicon glyphicon-trash table-action-icon table-action-remove',
                  'data-onclick', 'remove_');
            ie_close('td');
          ie_close('tr');
        }
      ie_close('tbody');
    ie_close('table');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'CampaignTable.render';
}

exports.render.params = ["campaigns"];
exports.render.types = {"campaigns":"any"};
templates = exports;
return exports;

});

class CampaignTable extends Component {}
Soy.register(CampaignTable, templates);
export default templates;
export { CampaignTable, templates };
/* jshint ignore:end */
