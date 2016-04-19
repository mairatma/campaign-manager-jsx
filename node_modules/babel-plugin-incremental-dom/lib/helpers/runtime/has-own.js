"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = injectHasOwn;

var _inject = require("../inject");

var _inject2 = _interopRequireDefault(_inject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Caches a reference to Object#hasOwnProperty.
function hasOwnAST(t) {
  /**
   * var _hasOwn = Object.prototype.hasOwnProperty;
   */
  return t.memberExpression(t.memberExpression(t.identifier("Object"), t.identifier("prototype")), t.identifier("hasOwnProperty"));
}

function injectHasOwn(t, plugin) {
  return (0, _inject2.default)(t, plugin, "hasOwn", hasOwnAST);
}