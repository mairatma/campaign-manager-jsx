"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isChildElement;
// Detects if this element is not a child of another JSX element
function isChildElement(path) {
  var isChild = false;

  // It is only a child if it's immediate parent is a JSX element,
  // or it is an ExpressionContainer who's parent is.
  path.findParent(function (path) {
    if (path.isJSXElement()) {
      isChild = true;
      return true;
    }
    return !path.isJSXExpressionContainer();
  });

  return isChild;
}