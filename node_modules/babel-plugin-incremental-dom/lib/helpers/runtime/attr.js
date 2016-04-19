"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = injectAttr;

var _inject = require("../inject");

var _inject2 = _interopRequireDefault(_inject);

var _toFunctionCallStatement = require("../ast/to-function-call-statement");

var _toFunctionCallStatement2 = _interopRequireDefault(_toFunctionCallStatement);

var _idomMethod = require("../idom-method");

var _idomMethod2 = _interopRequireDefault(_idomMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Flip flops the arguments when calling iDOM's
// `attr`, so that this function may be used
// as an iterator like an Object#forEach.
function attrAST(t, plugin, ref) {
  var name = t.identifier("name");
  var value = t.identifier("value");

  /**
   * function _attr(value, prop) {
   *   attr(prop, value);
   * }
   */
  return t.functionExpression(ref, [value, name], t.blockStatement([(0, _toFunctionCallStatement2.default)(t, (0, _idomMethod2.default)("attr", plugin), [name, value])]));
}

function injectAttr(t, plugin) {
  return (0, _inject2.default)(t, plugin, "attr", attrAST);
}