/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Header.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Header.
 * @public
 */

goog.module('Header.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('Tabs.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  ie_open('div', null, null,
      'class', 'campaign-manager-header row');
    ie_open('div', null, null,
        'class', 'col-md-12');
      ie_open('a', null, null,
          'href', '/create-campaign',
          'class', 'btn btn-primary campaign-manager-button-new pull-right',
          'data-onclick', 'startCampaignCreation_');
        itext('New Campaign');
      ie_close('button');
      if (opt_data.includeAddCampaignButton) {
        ie_open('h4', null, null,
            'class', 'campaign-manager-title campaign-manager-page-title');
          itext('Campaign Manager');
        ie_close('h4');
      }
    ie_close('div');
    if (opt_data.includeTabs) {
      ie_open('div', null, null,
          'class', 'col-md-12');
        $templateAlias1({tabs: [{name: 'Dashboard', href: '/dashboard'}, {name: 'Manage Campaigns', href: '/manage-campaigns'}], selectedIndex: opt_data.currentUrl == '/manage-campaigns' ? 1 : 0}, null, opt_ijData);
      ie_close('div');
    }
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Header.render';
}

exports.render.params = ["currentUrl","includeTabs","includeAddCampaignButton"];
exports.render.types = {"currentUrl":"any","includeTabs":"any","includeAddCampaignButton":"any"};
templates = exports;
return exports;

});

class Header extends Component {}
Soy.register(Header, templates);
export default templates;
export { Header, templates };
/* jshint ignore:end */
