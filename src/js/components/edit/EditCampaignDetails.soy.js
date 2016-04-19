/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from EditCampaignDetails.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace EditCampaignDetails.
 * @public
 */

goog.module('EditCampaignDetails.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('soy.asserts');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
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
  var $$temp;
  var campaign__soy85 = opt_data.editCampaignId != null ? opt_data.campaigns[opt_data.editCampaignId] : [];
  ie_open('div', null, null,
      'class', 'campaign-manager-edit-campaign-details container-fluid white-bg campaign-manager session session-merged-next');
    ie_open('h2');
      itext('Details');
    ie_close('h2');
    ie_open('div', null, null,
        'class', 'form-group');
      ie_open('label', null, null,
          'for', '',
          'class', 'col-md-1 control-label');
        itext('Name:');
      ie_close('label');
      ie_open('div', null, null,
          'class', 'col-md-4');
        ie_open('input', null, null,
            'type', 'text',
            'class', 'form-control',
            'name', 'name',
            'value', ($$temp = campaign__soy85.name) == null ? '' : $$temp);
        ie_close('input');
      ie_close('div');
      ie_open('br', null, null,
          'class', 'hidden-md hidden-lg');
      ie_close('br');
      ie_open('label', null, null,
          'class', 'col-md-1 col-md-offset-2 control-label');
        itext('Budget:');
      ie_close('label');
      ie_open('div', null, null,
          'class', 'col-md-2');
        ie_open('input', null, null,
            'type', 'text',
            'class', 'form-control',
            'name', 'budget',
            'value', ($$temp = campaign__soy85.budget) == null ? '' : $$temp);
        ie_close('input');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'col-md-2');
        ie_open('select', null, null,
            'class', 'form-control');
          ie_open('option');
            itext('($) Dollars');
          ie_close('option');
        ie_close('select');
      ie_close('div');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'form-group');
      ie_open('label', null, null,
          'for', '',
          'class', 'col-md-1 control-label');
        itext('Description:');
      ie_close('label');
      ie_open('div', null, null,
          'class', 'col-md-11');
        ie_open('textarea', null, null,
            'class', 'form-control',
            'rows', '8',
            'cols', '40',
            'name', 'description');
          itext((goog.asserts.assert((($$temp = campaign__soy85.description) == null ? '' : $$temp) != null), ($$temp = campaign__soy85.description) == null ? '' : $$temp));
        ie_close('textarea');
      ie_close('div');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'form-group');
      $date({label: 'Starts on:', name: 'startDate', obj: ($$temp = campaign__soy85.startDate) == null ? null : $$temp}, null, opt_ijData);
      ie_open('br', null, null,
          'class', 'hidden-md hidden-lg');
      ie_close('br');
      ie_void('div', null, null,
          'class', 'col-md-2');
      $date({label: 'Ends:', name: 'endDate', obj: ($$temp = campaign__soy85.endDate) == null ? null : $$temp}, null, opt_ijData);
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'EditCampaignDetails.render';
}


/**
 * @param {{
 *    obj: (?),
 *    label: string,
 *    name: string
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $date(opt_data, opt_ignored, opt_ijData) {
  soy.asserts.assertType(goog.isString(opt_data.label) || (opt_data.label instanceof goog.soy.data.SanitizedContent), 'label', opt_data.label, 'string|goog.soy.data.SanitizedContent');
  var label = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.label);
  soy.asserts.assertType(goog.isString(opt_data.name) || (opt_data.name instanceof goog.soy.data.SanitizedContent), 'name', opt_data.name, 'string|goog.soy.data.SanitizedContent');
  var name = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.name);
  ie_open('label', null, null,
      'for', '',
      'class', 'col-md-1 control-label');
    itext((goog.asserts.assert((label) != null), label));
  ie_close('label');
  ie_open('div', null, null,
      'class', 'col-md-2');
    ie_open('input', null, null,
        'type', 'date',
        'class', 'form-control',
        'name', name,
        'value', opt_data.obj ? opt_data.obj.month + '/' + opt_data.obj.date + '/' + opt_data.obj.year : '');
    ie_close('input');
  ie_close('div');
  ie_open('div', null, null,
      'class', 'col-md-1');
    ie_open('select', null, null,
        'class', 'form-control',
        'name', name + 'Time');
      for (var i113 = 0; i113 < 24; i113++) {
        ie_open_start('option');
            iattr('value', i113);
            $selectedOption({value: opt_data.obj ? opt_data.obj.hours : '', current: i113}, null, opt_ijData);
        ie_open_end();
          itext((goog.asserts.assert((i113 > 12 ? i113 - 12 : i113) != null), i113 > 12 ? i113 - 12 : i113));
          itext(':00 ');
          itext((goog.asserts.assert((i113 >= 12 ? 'PM' : 'AM') != null), i113 >= 12 ? 'PM' : 'AM'));
        ie_close('option');
      }
    ie_close('select');
  ie_close('div');
  ie_open('div', null, null,
      'class', 'col-md-1');
    ie_open('select', null, null,
        'class', 'form-control');
      ie_open('option');
        itext('GMT');
      ie_close('option');
    ie_close('select');
  ie_close('div');
}
exports.date = $date;
if (goog.DEBUG) {
  $date.soyTemplateName = 'EditCampaignDetails.date';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $selectedOption(opt_data, opt_ignored, opt_ijData) {
  if (opt_data.value == opt_data.current) {
    iattr('selected', '');
  }
}
exports.selectedOption = $selectedOption;
if (goog.DEBUG) {
  $selectedOption.soyTemplateName = 'EditCampaignDetails.selectedOption';
}

exports.render.params = ["campaigns","editCampaignId"];
exports.render.types = {"campaigns":"any","editCampaignId":"any"};
exports.date.params = ["label","name","obj"];
exports.date.types = {"label":"string","name":"string","obj":"any"};
exports.selectedOption.params = ["value","current"];
exports.selectedOption.types = {"value":"any","current":"any"};
templates = exports;
return exports;

});

class EditCampaignDetails extends Component {}
Soy.register(EditCampaignDetails, templates);
export default templates;
export { EditCampaignDetails, templates };
/* jshint ignore:end */
