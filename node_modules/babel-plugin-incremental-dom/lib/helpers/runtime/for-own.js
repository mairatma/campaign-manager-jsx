"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = injectForOwn;

var _inject = require("../inject");

var _inject2 = _interopRequireDefault(_inject);

var _hasOwn = require("./has-own");

var _hasOwn2 = _interopRequireDefault(_hasOwn);

var _toFunctionCall = require("../ast/to-function-call");

var _toFunctionCall2 = _interopRequireDefault(_toFunctionCall);

var _toFunctionCallStatement = require("../ast/to-function-call-statement");

var _toFunctionCallStatement2 = _interopRequireDefault(_toFunctionCallStatement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Loops over all own properties, calling
// the specified iterator function with
// value and prop name.
// Depends on the _hasOwn helper.
function forOwnAST(t, plugin, ref, deps) {
  var hasOwn = deps.hasOwn;
  var object = t.identifier("object");
  var iterator = t.identifier("iterator");
  var prop = t.identifier("prop");

  /**
   * function _forOwn(object, iterator) {
   *   for (var prop in object) {
   *     if (hasOwn.call(object, prop)) {
   *       iterator(object[prop], prop);
   *     }
   *   }
   * }
   */
  return t.functionExpression(ref, [object, iterator], t.blockStatement([t.forInStatement(t.variableDeclaration("var", [t.variableDeclarator(prop)]), object, t.ifStatement((0, _toFunctionCall2.default)(t, t.memberExpression(hasOwn, t.identifier("call")), [object, prop]), (0, _toFunctionCallStatement2.default)(t, iterator, [t.memberExpression(object, prop, true), prop])))]));
}

function injectForOwn(t, plugin) {
  return (0, _inject2.default)(t, plugin, "forOwn", forOwnAST, {
    hasOwn: _hasOwn2.default
  });
}