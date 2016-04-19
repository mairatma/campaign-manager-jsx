/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from EditCampaign.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace EditCampaign.
 * @public
 */

goog.module('EditCampaign.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('BackArrow.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('EditCampaignDetails.incrementaldom', 'render');

var $templateAlias3 = Soy.getTemplate('EditCampaignGoal.incrementaldom', 'render');

var $templateAlias4 = Soy.getTemplate('EditCampaignTactics.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'campaign-manager-edit-campaign');
    ie_open('div', null, null,
        'class', 'container-fluid white-bg campaign-manager');
      ie_open('div', null, null,
          'class', 'campaign-manager-page-title');
        $templateAlias1(opt_data, null, opt_ijData);
        ie_open('h1');
          itext((goog.asserts.assert((opt_data.editCampaignId != null ? 'Edit' : 'New') != null), opt_data.editCampaignId != null ? 'Edit' : 'New'));
          itext(' Campaign');
        ie_close('h1');
      ie_close('div');
    ie_close('div');
    ie_open('form', null, null,
        'class', 'form-horizontal');
      $templateAlias2(opt_data, null, opt_ijData);
      ie_open('div', null, null,
          'class', 'campaign-manager-edit-campaign-journey container-fluid white-bg campaign-manager session');
        ie_open('h2');
          itext('Journey');
        ie_close('h2');
        ie_open('div', null, null,
            'class', 'session-description');
          ie_open('p');
            ie_open('b');
              itext('What\'s the journey?');
            ie_close('b');
            itext(' ');
            ie_open('em');
              itext(' The journey defines the steps or stages of your campaign. If you don\'t have stages, just use the single step journey. If you are  using multi-step journeys you\'ll be able to define goals for each stage and program tactic that depend on information from the previous stage.');
            ie_close('em');
          ie_close('p');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'form-group');
          ie_open('label', null, null,
              'for', '',
              'class', 'col-md-1 control-label');
            itext('Journey');
          ie_close('label');
          ie_open('div', null, null,
              'class', 'col-md-2');
            ie_open('select', null, null,
                'class', 'form-control',
                'name', 'journey');
              ie_open('option', null, null,
                  'value', '1');
                itext('Sales Funnel');
              ie_close('option');
            ie_close('select');
          ie_close('div');
          ie_open('div', null, null,
              'class', 'col-md-4');
            ie_open('a', null, null,
                'class', 'btn-manage-journey');
              itext('Manage journeys');
            ie_close('a');
          ie_close('div');
        ie_close('div');
      ie_close('div');
      $templateAlias3(opt_data, null, opt_ijData);
      $templateAlias4({destinations: opt_data.destinations, selectedTacticIds: opt_data.editCampaignId != null ? opt_data.campaigns[opt_data.editCampaignId].tacticIds : [], tactics: opt_data.tactics}, null, opt_ijData);
      ie_open('div', null, null,
          'class', 'container-fluid campaign-manager white-bg session');
        ie_open('div', null, null,
            'class', 'form-group');
          ie_open('div', null, null,
              'class', 'col-sm-10');
            ie_open('a', null, null,
                'href', opt_data.sourceUrl,
                'class', 'btn btn-lg btn-success',
                'data-onclick', 'save');
              itext((goog.asserts.assert((opt_data.editCampaignId != null ? 'Save' : 'Create') != null), opt_data.editCampaignId != null ? 'Save' : 'Create'));
              itext(' Campaign');
            ie_close('a');
            ie_open('a', null, null,
                'href', opt_data.sourceUrl,
                'class', 'btn btn-lg btn-lighter');
              itext('Cancel');
            ie_close('a');
          ie_close('div');
        ie_close('div');
      ie_close('div');
    ie_close('form');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'EditCampaign.render';
}

exports.render.params = ["campaigns","destinations","editCampaignId","sourceUrl","tactics"];
exports.render.types = {"campaigns":"any","destinations":"any","editCampaignId":"any","sourceUrl":"any","tactics":"any"};
templates = exports;
return exports;

});

class EditCampaign extends Component {}
Soy.register(EditCampaign, templates);
export default templates;
export { EditCampaign, templates };
/* jshint ignore:end */
