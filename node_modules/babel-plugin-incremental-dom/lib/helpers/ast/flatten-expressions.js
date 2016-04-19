"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flattenExpressions;

var _toStatement = require("./to-statement");

var _toStatement2 = _interopRequireDefault(_toStatement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Helper to flatten out sequence expressions into a top level
// expression statements.
function flattenExpressions(t, expressions) {
  var nodes = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

  return expressions.reduce(function (nodes, node) {
    if (t.isSequenceExpression(node)) {
      return flattenExpressions(t, node.expressions, nodes);
    }

    nodes.push((0, _toStatement2.default)(t, node));
    return nodes;
  }, nodes);
}