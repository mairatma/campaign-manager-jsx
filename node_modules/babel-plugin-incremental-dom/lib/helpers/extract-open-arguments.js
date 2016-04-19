"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractOpenArguments;

var _attr = require("./runtime/attr");

var _attr2 = _interopRequireDefault(_attr);

var _forOwn = require("./runtime/for-own");

var _forOwn2 = _interopRequireDefault(_forOwn);

var _toFunctionCall = require("./ast/to-function-call");

var _toFunctionCall2 = _interopRequireDefault(_toFunctionCall);

var _isLiteralOrUndefined = require("./ast/is-literal-or-undefined");

var _isLiteralOrUndefined2 = _interopRequireDefault(_isLiteralOrUndefined);

var _hoistStatics = require("./hoist-statics");

var _hoistStatics2 = _interopRequireDefault(_hoistStatics);

var _idomMethod = require("./idom-method");

var _idomMethod2 = _interopRequireDefault(_idomMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Extracts attributes into the appropriate
// attribute array. Static attributes and the key
// are placed into static attributes, and expressions
// are placed into the variadic attributes.
function extractOpenArguments(t, path, plugin, _ref) {
  var eager = _ref.eager;
  var hoist = _ref.hoist;

  var attributes = path.get("attributes");
  var scope = path.scope;

  var attrs = [];
  var staticAttrs = [];
  var key = null;
  var keyIndex = -1;
  var statics = t.arrayExpression(staticAttrs);

  var hasSpread = attributes.some(function (a) {
    return a.isJSXSpreadAttribute();
  });
  var forOwn = void 0,
      forOwnAttr = void 0;
  if (hasSpread) {
    forOwn = (0, _forOwn2.default)(t, plugin);
    forOwnAttr = (0, _attr2.default)(t, plugin);
  }

  attributes.forEach(function (attribute) {
    if (hasSpread && attribute.isJSXSpreadAttribute()) {
      return attrs.push((0, _toFunctionCall2.default)(t, forOwn, [attribute.get("argument").node, forOwnAttr]));
    }

    var name = t.stringLiteral(attribute.node.name.name);
    var value = attribute.get("value");
    var node = value.node;

    // Attributes without a value are interpreted as `true`.
    if (!node) {
      value.replaceWith(t.jSXExpressionContainer(t.booleanLiteral(true)));
    }

    // Get the value inside the expression.
    if (value.isJSXExpressionContainer()) {
      value = value.get("expression");
      node = value.node;
    }

    var literal = (0, _isLiteralOrUndefined2.default)(value);

    // The key attribute must be passed to the `elementOpen` call.
    if (name.value === "key") {
      key = node;

      // If it's not a literal key, we must assign it in the statics array.
      // That is, unless this element is being closure wrapped, in which
      // case we must push the key attribute into the dynamic attributes.
      if (hoist && !literal && !eager) {
        node = t.stringLiteral("");
        keyIndex = staticAttrs.length + 1;
      }
      literal = literal || !(hoist && eager);
    }

    if (literal) {
      staticAttrs.push(name, node);
    } else if (hasSpread) {
      attrs.push((0, _toFunctionCall2.default)(t, (0, _idomMethod2.default)("attr", plugin), [name, node]));
    } else {
      attrs.push(name, node);
    }
  });

  if (attrs.length === 0) {
    attrs = null;
  }
  if (staticAttrs.length === 0) {
    statics = null;
  } else if (hoist) {
    statics = (0, _hoistStatics2.default)(t, scope, plugin, statics, key, keyIndex);
  }

  return { key: key, statics: statics, attrs: attrs, hasSpread: hasSpread };
}