"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var t = _ref.types;
  var _traverse = _ref.traverse;

  function traverse(path, visitor, state) {
    _traverse.visitors.explode(visitor);

    var node = path.node;

    if (!node) {
      return;
    }

    var type = node.type;

    var _ref2 = visitor[type] || {};

    var _ref2$enter = _ref2.enter;
    var enter = _ref2$enter === undefined ? [] : _ref2$enter;
    var _ref2$exit = _ref2.exit;
    var exit = _ref2$exit === undefined ? [] : _ref2$exit;


    enter.forEach(function (fn) {
      return fn.call(state, path, state);
    });
    if (!path.shouldSkip) {
      path.traverse(visitor, state);
      exit.forEach(function (fn) {
        return fn.call(state, path, state);
      });
    }
    path.shouldSkip = false;
  }

  var elementVisitor = {
    JSXNamespacedName: function JSXNamespacedName(path) {
      throw path.buildCodeFrameError("JSX Namespaces aren't supported.");
    },


    JSXElement: {
      enter: function enter(path) {
        var secondaryTree = this.secondaryTree;
        var root = this.root;
        var replacedElements = this.replacedElements;
        var closureVarsStack = this.closureVarsStack;

        var needsWrapper = root !== path && !(0, _isChildElement2.default)(path);

        // If this element needs to be wrapped in a closure, we need to transform
        // it's children without wrapping them.
        if (secondaryTree || needsWrapper) {
          // If this element needs a closure wrapper, we need a new array of
          // closure parameters. Otherwise, use the parent's, since it may need
          // a closure wrapper.
          closureVarsStack.push([]);

          var opts = this.opts;
          var file = this.file;

          var state = { secondaryTree: false, root: path, replacedElements: replacedElements, closureVarsStack: closureVarsStack, opts: opts, file: file };
          path.traverse(_extractExpressions2.default, state);
          path.traverse(elementVisitor, state);
        }
      },
      exit: function exit(path) {
        var hoist = this.opts.hoist;
        var root = this.root;
        var secondaryTree = this.secondaryTree;
        var replacedElements = this.replacedElements;
        var closureVarsStack = this.closureVarsStack;

        var isChild = (0, _isChildElement2.default)(path);
        var needsWrapper = root !== path && !isChild;
        var eager = secondaryTree || needsWrapper;
        var componentAsReference = this.opts.componentAsReference;

        var parentPath = path.parentPath;

        var explicitReturn = parentPath.isReturnStatement();
        var implicitReturn = parentPath.isArrowFunctionExpression();

        var openingElement = (0, _elementOpenCall2.default)(t, path.get("openingElement"), this, { eager: eager, hoist: hoist, componentAsReference: componentAsReference });
        var closingElement = (0, _elementCloseCall2.default)(t, path.get("openingElement"), this, { componentAsReference: componentAsReference });
        var children = (0, _buildChildren2.default)(t, path.get("children"), this);

        var elements = [openingElement].concat(_toConsumableArray(children));
        if (closingElement) {
          elements.push(closingElement);
        }

        // Expressions Containers must contain an expression and not statements.
        // This will be flattened out into statements later.
        if (isChild) {
          var sequence = t.sequenceExpression(elements);
          // Mark this sequence as a JSX Element so we can avoid an unnecessary
          // renderArbitrary call.
          replacedElements.add(sequence);
          path.replaceWith(sequence);
          return;
        }

        if (explicitReturn || implicitReturn || secondaryTree || needsWrapper) {
          // Transform (recursively) any sequence expressions into a series of
          // statements.
          elements = (0, _flattenExpressions2.default)(t, elements);

          // Ensure the last statement returns the DOM element.
          elements = (0, _statementsWithReturnLast2.default)(t, elements);
        }

        if (secondaryTree || needsWrapper) {
          // Create a wrapper around our element, and mark it as a one so later
          // child expressions can identify and "render" it.
          var closureVars = closureVarsStack.pop();
          var params = closureVars.map(function (e) {
            return e.param;
          });
          var wrapper = t.functionExpression(null, params, t.blockStatement(elements));

          if (hoist) {
            wrapper = (0, _hoist.addHoistedDeclarator)(t, path.scope, "wrapper", wrapper, this);
          }

          var args = [wrapper];
          if (closureVars.length) {
            var paramArgs = closureVars.map(function (e) {
              return e.arg;
            });
            args.push(t.arrayExpression(paramArgs));
          }

          var wrapperCall = (0, _toFunctionCall2.default)(t, (0, _jsxWrapper2.default)(t, this), args);
          replacedElements.add(wrapperCall);
          path.replaceWith(wrapperCall);
          return;
        }

        // This is the main JSX element. Replace the return statement
        // with all the nested calls, returning the main JSX element.
        if (explicitReturn) {
          parentPath.replaceWithMultiple(elements);
        } else {
          path.replaceWithMultiple(elements);
        }
      }
    }
  };

  var rootElementVisitor = {
    JSXElement: function JSXElement(path) {
      var isRoot = (0, _isRootJsx2.default)(path);

      if (isRoot) {
        var parentPath = path.parentPath;
        var opts = this.opts;
        var file = this.file;

        var secondaryTree = !(parentPath.isReturnStatement() || parentPath.isArrowFunctionExpression());
        var replacedElements = new Set();
        var closureVarsStack = [];

        var state = {
          root: path,
          secondaryTree: secondaryTree,
          replacedElements: replacedElements,
          closureVarsStack: closureVarsStack,
          opts: opts,
          file: file
        };

        traverse(path, elementVisitor, state);
      } else {
        path.skip();
      }
    }
  };

  // This visitor first finds the root element, and ignores all the others.
  return {
    manipulateOptions: function manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("jsx");
    },

    visitor: {
      Program: {
        enter: function enter() {
          (0, _inject.setupInjector)(this);
          (0, _hoist.setupHoists)(this);
        },
        exit: function exit(path) {
          (0, _hoist.hoist)(t, path, this);
          (0, _inject.injectHelpers)(this);
        }
      },

      Function: {
        exit: function exit(path) {
          path.traverse(rootElementVisitor, this);

          var opts = this.opts;
          var file = this.file;

          var secondaryTree = true;
          var replacedElements = new Set();
          var closureVarsStack = [];

          var state = {
            root: path,
            secondaryTree: secondaryTree,
            replacedElements: replacedElements,
            closureVarsStack: closureVarsStack,
            opts: opts,
            file: file
          };

          path.traverse(elementVisitor, state);
        }
      }
    }
  };
};

var _isRootJsx = require("./helpers/is-root-jsx");

var _isRootJsx2 = _interopRequireDefault(_isRootJsx);

var _isChildElement = require("./helpers/is-child-element");

var _isChildElement2 = _interopRequireDefault(_isChildElement);

var _inject = require("./helpers/inject");

var _hoist = require("./helpers/hoist");

var _extractExpressions = require("./helpers/extract-expressions");

var _extractExpressions2 = _interopRequireDefault(_extractExpressions);

var _jsxWrapper = require("./helpers/runtime/jsx-wrapper");

var _jsxWrapper2 = _interopRequireDefault(_jsxWrapper);

var _toFunctionCall = require("./helpers/ast/to-function-call");

var _toFunctionCall2 = _interopRequireDefault(_toFunctionCall);

var _flattenExpressions = require("./helpers/ast/flatten-expressions");

var _flattenExpressions2 = _interopRequireDefault(_flattenExpressions);

var _statementsWithReturnLast = require("./helpers/ast/statements-with-return-last");

var _statementsWithReturnLast2 = _interopRequireDefault(_statementsWithReturnLast);

var _elementOpenCall = require("./helpers/element-open-call");

var _elementOpenCall2 = _interopRequireDefault(_elementOpenCall);

var _elementCloseCall = require("./helpers/element-close-call");

var _elementCloseCall2 = _interopRequireDefault(_elementCloseCall);

var _buildChildren = require("./helpers/build-children");

var _buildChildren2 = _interopRequireDefault(_buildChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }