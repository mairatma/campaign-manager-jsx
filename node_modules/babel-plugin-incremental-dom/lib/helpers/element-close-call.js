"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = elementCloseCall;

var _toFunctionCall = require("./ast/to-function-call");

var _toFunctionCall2 = _interopRequireDefault(_toFunctionCall);

var _toReference = require("./ast/to-reference");

var _toReference2 = _interopRequireDefault(_toReference);

var _idomMethod = require("./idom-method");

var _idomMethod2 = _interopRequireDefault(_idomMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns the closing element's function call.
function elementCloseCall(t, path, plugin, _ref) {
  var componentAsReference = _ref.componentAsReference;

  var node = path.node;

  // Self closing elements may not need a closing element.
  if (node.selfClosing) {
    var hasSpread = path.get("attributes").some(function (attr) {
      return attr.isJSXSpreadAttribute();
    });

    // Self closing elements that do not contain a SpreadAttribute will use `elementVoid`,
    // so the closing `elementClose` is not needed.
    if (!hasSpread) {
      return null;
    }
  }

  var isComponent = /^[A-Z]/.test(node.name.name);
  return (0, _toFunctionCall2.default)(t, (0, _idomMethod2.default)("elementClose", plugin), [(0, _toReference2.default)(t, node.name, isComponent && componentAsReference)]);
}