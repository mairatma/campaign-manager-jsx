/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Card.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Card.
 * @public
 */

goog.module('Card.incrementaldom');

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
 * @param {{
 *    cssClass: (?),
 *    children: (!soydata.SanitizedHtml|string)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  soy.asserts.assertType((opt_data.children instanceof Function) || (opt_data.children instanceof soydata.UnsanitizedText) || goog.isString(opt_data.children), 'children', opt_data.children, 'Function');
  var children = /** @type {Function} */ (opt_data.children);
  ie_open('div', null, null,
      'class', 'campaign-manager-card ' + (opt_data.cssClass ? opt_data.cssClass : ''));
    ie_open('div', null, null,
        'class', 'campaign-manager-card-body clearfix');
      children();
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Card.render';
}

exports.render.params = ["children","cssClass"];
exports.render.types = {"children":"html","cssClass":"any"};
templates = exports;
return exports;

});

class Card extends Component {}
Soy.register(Card, templates);
export default templates;
export { Card, templates };
/* jshint ignore:end */
