"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = iDOMMethod;
function iDOMMethod(method, plugin) {
  var prefix = plugin.opts.prefix || "";
  return prefix ? prefix + "." + method : method;
}