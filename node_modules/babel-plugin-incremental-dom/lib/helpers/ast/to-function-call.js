"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toFunctionCall;

var _toReference = require("./to-reference");

var _toReference2 = _interopRequireDefault(_toReference);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Helper to create a function call in AST.
function toFunctionCall(t, functionName, args) {
  return t.callExpression((0, _toReference2.default)(t, functionName), args);
}