"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractOpenArguments;

var _isLiteralOrUndefined = require("./ast/is-literal-or-undefined");

var _isLiteralOrUndefined2 = _interopRequireDefault(_isLiteralOrUndefined);

var _hoistStatics = require("./hoist-statics");

var _hoistStatics2 = _interopRequireDefault(_hoistStatics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Extracts attributes into the appropriate
// attribute array. Static attributes and the key
// are placed into static attributes, and expressions
// are placed into the variadic attributes.
function extractOpenArguments(t, path, plugin) {
  var attributes = path.get("attributes");
  var scope = path.scope;
  var hoist = plugin.opts.hoist;

  var attrs = [];
  var staticAttrs = [];
  var key = null;
  var keyIndex = -1;
  var statics = t.arrayExpression(staticAttrs);

  attributes.forEach(function (attribute) {
    if (attribute.isJSXSpreadAttribute()) {
      attrs.push({
        name: null,
        value: attribute.get("argument").node,
        isSpread: true
      });
      return;
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
      if (hoist && !literal) {
        value.replaceWith(t.stringLiteral(""));
        node = value.node;
        keyIndex = staticAttrs.length + 1;
      }
      literal = true;
    }

    if (literal) {
      staticAttrs.push(name, node);
    } else {
      attrs.push({
        name: name,
        value: node,
        isSpread: false
      });
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

  return { key: key, statics: statics, attrs: attrs };
}