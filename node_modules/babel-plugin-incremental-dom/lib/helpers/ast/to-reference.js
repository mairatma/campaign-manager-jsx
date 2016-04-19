"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toReference;
var memberExpressionSplitter = /\./g;

// Helper to transform a JSX identifier into a normal reference.
function toReference(t, node) {
  var identifier = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  if (typeof node === "string") {
    if (memberExpressionSplitter.test(node)) {
      return node.split(memberExpressionSplitter).map(function (s) {
        return t.identifier(s);
      }).reduce(function (obj, prop) {
        return t.memberExpression(obj, prop);
      });
    }

    return t.identifier(node);
  }

  if (t.isJSXIdentifier(node)) {
    return identifier ? t.identifier(node.name) : t.stringLiteral(node.name);
  }

  if (t.isJSXMemberExpression(node)) {
    return t.memberExpression(toReference(t, node.object, true), toReference(t, node.property, true));
  }

  return node;
}