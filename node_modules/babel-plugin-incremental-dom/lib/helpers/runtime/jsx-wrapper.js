"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = injectJSXWrapper;

var _inject = require("../inject");

var _inject2 = _interopRequireDefault(_inject);

var _toFunctionCall = require("../ast/to-function-call");

var _toFunctionCall2 = _interopRequireDefault(_toFunctionCall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Wraps a JSX element in a closure, capturing the arguments
// that it's attributes and children need to render.
// Also sets `__jsxDOMWrapper` property, so that the closure
// may be identified as a wrapper that should be called during
// render.
function jsxWrapperAST(t, plugin, ref) {
  var func = t.identifier("func");
  var args = t.identifier("args");
  var wrapper = t.identifier("wrapper");

  /**
   * function _jsxWrapper(func, args) {
   *   var wrapper = args ? function() {
   *     return func.apply(this, args);
   *   } : func;
   *   wrapper.__jsxDOMWrapper = true;
   *   return wrapper;
   * }
   */
  return t.functionExpression(ref, [func, args], t.blockStatement([t.variableDeclaration("var", [t.variableDeclarator(wrapper, t.conditionalExpression(args, t.functionExpression(wrapper, [], t.blockStatement([t.returnStatement((0, _toFunctionCall2.default)(t, t.memberExpression(func, t.identifier("apply")), [t.identifier("this"), args]))])), func))]), t.expressionStatement(t.AssignmentExpression("=", t.memberExpression(wrapper, t.identifier("__jsxDOMWrapper")), t.booleanLiteral(true))), t.returnStatement(wrapper)]));
}

function injectJSXWrapper(t, plugin) {
  return (0, _inject2.default)(t, plugin, "jsxWrapper", jsxWrapperAST);
}