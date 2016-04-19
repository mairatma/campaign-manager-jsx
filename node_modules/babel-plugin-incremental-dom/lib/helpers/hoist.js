"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupHoists = setupHoists;
exports.hoist = hoist;
exports.addHoistedDeclarator = addHoistedDeclarator;
var namespace = "incremental-dom-hoists";

// Sets up the file to hoist all statics
function setupHoists(_ref) {
  var file = _ref.file;

  // A map to store helper variable references
  // for each file
  file.set(namespace, []);
}

function hoist(t, program, _ref2) {
  var file = _ref2.file;

  var hoists = file.get(namespace);

  if (hoists.length) {
    var declaration = t.variableDeclaration("const", hoists);
    program.unshiftContainer("body", declaration);
  }
}

// Hoists the variable to the top of the file.
function addHoistedDeclarator(t, scope, name, value, _ref3) {
  var file = _ref3.file;

  var ref = scope.generateUidIdentifier(name);
  var declarator = t.variableDeclarator(ref, value);
  file.get(namespace).push(declarator);

  return ref;
}