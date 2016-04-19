/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Search.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Search.
 * @public
 */

goog.module('Search.incrementaldom');

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
  var $$temp;
  opt_data = opt_data || {};
  ie_open('div', null, null,
      'class', 'input-group campaign-manager-search');
    ie_open('input', null, null,
        'type', 'text',
        'class', 'form-control input-lg',
        'placeholder', 'Search',
        'value', ($$temp = opt_data.value) == null ? '' : $$temp,
        'data-oninput', 'handleInput_');
    ie_close('input');
    ie_open('div', null, null,
        'class', 'input-group-addon input-group-addon-clean');
      ie_void('span', null, null,
          'class', 'glyphicon glyphicon-search');
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Search.render';
}

exports.render.params = ["value"];
exports.render.types = {"value":"any"};
templates = exports;
return exports;

});

class Search extends Component {}
Soy.register(Search, templates);
export default templates;
export { Search, templates };
/* jshint ignore:end */
