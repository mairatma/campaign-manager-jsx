"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = elementOpenCall;

var _toFunctionCall = require("./ast/to-function-call");

var _toFunctionCall2 = _interopRequireDefault(_toFunctionCall);

var _toReference = require("./ast/to-reference");

var _toReference2 = _interopRequireDefault(_toReference);

var _idomMethod = require("./idom-method");

var _idomMethod2 = _interopRequireDefault(_idomMethod);

var _extractOpenArguments2 = require("./extract-open-arguments");

var _extractOpenArguments3 = _interopRequireDefault(_extractOpenArguments2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Returns the opening element's function call.
function elementOpenCall(t, path, plugin, options) {
  var isComponent = /^[A-Z]/.test(path.node.name.name);
  var tag = (0, _toReference2.default)(t, path.node.name, isComponent && options.componentAsReference);
  var args = [tag];

  var _extractOpenArguments = (0, _extractOpenArguments3.default)(t, path, plugin, options);

  var key = _extractOpenArguments.key;
  var statics = _extractOpenArguments.statics;
  var attrs = _extractOpenArguments.attrs;
  var hasSpread = _extractOpenArguments.hasSpread;

  // Only push arguments if they're needed

  if (key || statics) {
    args.push(key || t.nullLiteral());
  }
  if (statics) {
    args.push(statics);
  }

  // If there is a spread element, we need to use
  // the elementOpenStart/elementOpenEnd syntax.
  // This allows spreads to be transformed into
  // attr(name, value) calls.
  if (hasSpread) {
    var expressions = [(0, _toFunctionCall2.default)(t, (0, _idomMethod2.default)("elementOpenStart", plugin), args)].concat(_toConsumableArray(attrs), [(0, _toFunctionCall2.default)(t, (0, _idomMethod2.default)("elementOpenEnd", plugin), [tag])]);

    return t.sequenceExpression(expressions);
  }

  if (attrs) {
    // Only push key and statics if they have not
    // already been pushed.
    if (!statics) {
      if (!key) {
        args.push(t.nullLiteral());
      }
      args.push(t.nullLiteral());
    }

    args.push.apply(args, _toConsumableArray(attrs));
  }

  var selfClosing = path.node.selfClosing;
  var elementFunction = selfClosing ? "elementVoid" : "elementOpen";
  return (0, _toFunctionCall2.default)(t, (0, _idomMethod2.default)(elementFunction, plugin), args);
}