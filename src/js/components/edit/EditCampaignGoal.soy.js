/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from EditCampaignGoal.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace EditCampaignGoal.
 * @public
 */

goog.module('EditCampaignGoal.incrementaldom');

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
  var campaign__soy132 = opt_data.editCampaignId != null ? opt_data.campaigns[opt_data.editCampaignId] : [];
  ie_open('div', null, null,
      'class', 'campaign-manager-edit-campaign-goal container-fluid campaign-manager session');
    ie_open('div', null, null,
        'class', 'campaign-manager-card');
      ie_open('h2');
        itext('Goal');
      ie_close('h2');
      ie_open('div', null, null,
          'class', 'session-description');
        ie_open('p');
          ie_open('em');
            itext('Here you can define the goal of this stage. This will be used to generate smart reports in your campaign dashboard');
          ie_close('em');
        ie_close('p');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'form-group');
        ie_open('div', null, null,
            'class', 'col-md-2');
          ie_open('select', null, null,
              'class', 'form-control');
            ie_open('option');
              itext('Lead Generation');
            ie_close('option');
          ie_close('select');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'col-md-2');
          ie_open('input', null, null,
              'type', 'text',
              'class', 'form-control',
              'name', 'generation.count',
              'value', campaign__soy132.goal ? campaign__soy132.goal.generation.count : 0);
          ie_close('input');
        ie_close('div');
        ie_open('label', null, null,
            'for', '',
            'class', 'col-md-2 control-label');
          ie_open('div', null, null,
              'class', 'text-right');
            itext('new contacts in: ');
          ie_close('div');
        ie_close('label');
        ie_open('div', null, null,
            'class', 'col-md-2');
          ie_open('select', null, null,
              'class', 'form-control');
            ie_open('option');
              itext('2');
            ie_close('option');
          ie_close('select');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'col-md-2');
          ie_open('select', null, null,
              'class', 'form-control');
            ie_open('option');
              itext('Weeks');
            ie_close('option');
          ie_close('select');
        ie_close('div');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'EditCampaignGoal.render';
}

exports.render.params = ["campaigns","editCampaignId"];
exports.render.types = {"campaigns":"any","editCampaignId":"any"};
templates = exports;
return exports;

});

class EditCampaignGoal extends Component {}
Soy.register(EditCampaignGoal, templates);
export default templates;
export { EditCampaignGoal, templates };
/* jshint ignore:end */
