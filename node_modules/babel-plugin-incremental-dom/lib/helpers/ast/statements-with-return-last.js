"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = statementsWithReturnLast;
// Ensures the final statement is a return statement.
function statementsWithReturnLast(t, statements) {
  var lastIndex = statements.length - 1;
  var last = statements[lastIndex];

  if (!t.isReturnStatement(last)) {
    statements[lastIndex] = t.returnStatement(last.expression);
  }

  return statements;
}