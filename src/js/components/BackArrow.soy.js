/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from BackArrow.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BackArrow.
 * @public
 */

goog.module('BackArrow.incrementaldom');

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
  ie_open('a', null, null,
      'href', opt_data.sourceUrl,
      'class', 'back-arrow');
    ie_void('span', null, null,
        'class', 'glyphicon glyphicon-menu-left');
  ie_close('a');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'BackArrow.render';
}

exports.render.params = ["sourceUrl"];
exports.render.types = {"sourceUrl":"any"};
templates = exports;
return exports;

});

class BackArrow extends Component {}
Soy.register(BackArrow, templates);
export default templates;
export { BackArrow, templates };
/* jshint ignore:end */
