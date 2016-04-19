/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from ImageCard.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ImageCard.
 * @public
 */

goog.module('ImageCard.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('Card.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'campaign-manager-image-card');
    var param44 = function() {
      ie_open('div', null, null,
          'class', 'campaign-manager-card-title');
        itext((goog.asserts.assert((opt_data.title) != null), opt_data.title));
        ie_open('span', null, null,
            'class', 'highlight count');
          itext((goog.asserts.assert((opt_data.count) != null), opt_data.count));
        ie_close('span');
      ie_close('div');
      ie_open('div');
        ie_open('img', null, null,
            'src', opt_data.imageUrl);
        ie_close('img');
      ie_close('div');
    };
    $templateAlias1({children: param44}, null, opt_ijData);
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ImageCard.render';
}

exports.render.params = ["count","imageUrl","title"];
exports.render.types = {"count":"any","imageUrl":"any","title":"any"};
templates = exports;
return exports;

});

class ImageCard extends Component {}
Soy.register(ImageCard, templates);
export default templates;
export { ImageCard, templates };
/* jshint ignore:end */
