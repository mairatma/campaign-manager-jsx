"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addStaticHoist;

var _hoist = require("./hoist");

// Hoists the static attributes array, so that the array instance is not
// recreated multiple times.
function addStaticHoist(t, scope, plugin, statics, key, keyIndex) {
  var id = (0, _hoist.addHoistedDeclarator)(t, scope, "statics", statics, plugin);

  if (keyIndex === -1) {
    return id;
  } else {
    // We need to assign the key variable's value to the statics array at `index`.
    return t.sequenceExpression([t.assignmentExpression("=", t.memberExpression(id, t.numericLiteral(keyIndex), true), key), id]);
  }
}