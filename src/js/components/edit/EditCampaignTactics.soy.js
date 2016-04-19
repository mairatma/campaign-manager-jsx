/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from EditCampaignTactics.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace EditCampaignTactics.
 * @public
 */

goog.module('EditCampaignTactics.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('TacticsTable.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'campaign-manager-edit-campaign-tactics container-fluid campaign-manager white-bg session session-merged-next');
    ie_open('h2');
      itext('Tactics');
    ie_close('h2');
    ie_open('div', null, null,
        'class', 'session-description');
      ie_open('p');
        ie_open('b');
          itext('What are tactics?');
        ie_close('b');
        itext(' ');
        ie_open('em');
          itext('Tactics are the different ways to achive your marketing goals. They usually include publishing destinations like landing pages or blog, defining broadcast prmotion on social media or via personalized banner ads in your webs and also one to one promotions like emails, SMS or Push notifications to the right audience.');
        ie_close('em');
      ie_close('p');
    ie_close('div');
    $templateAlias1(opt_data, null, opt_ijData);
    ie_open('input', null, null,
        'type', 'hidden',
        'value', $join({ids: opt_data.selectedTacticIds}, null, opt_ijData),
        'name', 'tacticIds');
    ie_close('input');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'EditCampaignTactics.render';
}


/**
 * @param {{
 *    ids: !Array<number|string>
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {string}
 * @suppress {checkTypes}
 */
function $join(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var ids = goog.asserts.assertArray(opt_data.ids, "expected parameter 'ids' of type list<int|string>.");
  var idList152 = ids;
  var idListLen152 = idList152.length;
  for (var idIndex152 = 0; idIndex152 < idListLen152; idIndex152++) {
    var idData152 = idList152[idIndex152];
    output += (idIndex152 > 0) ? ',' : '';
    output += idData152;
  }
  return output;
}
exports.join = $join;
if (goog.DEBUG) {
  $join.soyTemplateName = 'EditCampaignTactics.join';
}

exports.render.params = ["ids","destinations","selectedTacticIds","tactics"];
exports.render.types = {"ids":"list<string|int>","destinations":"any","selectedTacticIds":"any","tactics":"any"};
templates = exports;
return exports;

});

class EditCampaignTactics extends Component {}
Soy.register(EditCampaignTactics, templates);
export default templates;
export { EditCampaignTactics, templates };
/* jshint ignore:end */
