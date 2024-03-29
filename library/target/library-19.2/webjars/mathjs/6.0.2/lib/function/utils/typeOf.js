"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDeprecatedTypeof = exports.createTypeOf = void 0;

var _factory = require("../../utils/factory");

var _is = require("../../utils/is");

var _log = require("../../utils/log");

var name = 'typeOf';
var dependencies = ['typed'];
var createTypeOf =
/* #__PURE__ */
(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;

  /**
   * Determine the type of a variable.
   *
   * Function `typeOf` recognizes the following types of objects:
   *
   * Object                 | Returns       | Example
   * ---------------------- | ------------- | ------------------------------------------
   * null                   | `'null'`      | `math.typeOf(null)`
   * number                 | `'number'`    | `math.typeOf(3.5)`
   * boolean                | `'boolean'`   | `math.typeOf(true)`
   * string                 | `'string'`    | `math.typeOf('hello world')`
   * Array                  | `'Array'`     | `math.typeOf([1, 2, 3])`
   * Date                   | `'Date'`      | `math.typeOf(new Date())`
   * Function               | `'Function'`  | `math.typeOf(function () {})`
   * Object                 | `'Object'`    | `math.typeOf({a: 2, b: 3})`
   * RegExp                 | `'RegExp'`    | `math.typeOf(/a regexp/)`
   * undefined              | `'undefined'` | `math.typeOf(undefined)`
   * math.BigNumber         | `'BigNumber'` | `math.typeOf(math.bignumber('2.3e500'))`
   * math.Chain             | `'Chain'`     | `math.typeOf(math.chain(2))`
   * math.Complex           | `'Complex'`   | `math.typeOf(math.complex(2, 3))`
   * math.Fraction          | `'Fraction'`  | `math.typeOf(math.fraction(1, 3))`
   * math.Help              | `'Help'`      | `math.typeOf(math.help('sqrt'))`
   * math.Help              | `'Help'`      | `math.typeOf(math.help('sqrt'))`
   * math.Index             | `'Index'`     | `math.typeOf(math.index(1, 3))`
   * math.Matrix            | `'Matrix'`    | `math.typeOf(math.matrix([[1,2], [3, 4]]))`
   * math.Range             | `'Range'`     | `math.typeOf(math.range(0, 10))`
   * math.ResultSet         | `'ResultSet'` | `math.typeOf(math.evaluate('a=2\nb=3'))`
   * math.Unit              | `'Unit'`      | `math.typeOf(math.unit('45 deg'))`
   * math.AccessorNode            | `'AccessorNode'`            | `math.typeOf(math.parse('A[2]'))`
   * math.ArrayNode               | `'ArrayNode'`               | `math.typeOf(math.parse('[1,2,3]'))`
   * math.AssignmentNode          | `'AssignmentNode'`          | `math.typeOf(math.parse('x=2'))`
   * math.BlockNode               | `'BlockNode'`               | `math.typeOf(math.parse('a=2; b=3'))`
   * math.ConditionalNode         | `'ConditionalNode'`         | `math.typeOf(math.parse('x<0 ? -x : x'))`
   * math.ConstantNode            | `'ConstantNode'`            | `math.typeOf(math.parse('2.3'))`
   * math.FunctionAssignmentNode  | `'FunctionAssignmentNode'`  | `math.typeOf(math.parse('f(x)=x^2'))`
   * math.FunctionNode            | `'FunctionNode'`            | `math.typeOf(math.parse('sqrt(4)'))`
   * math.IndexNode               | `'IndexNode'`               | `math.typeOf(math.parse('A[2]').index)`
   * math.ObjectNode              | `'ObjectNode'`              | `math.typeOf(math.parse('{a:2}'))`
   * math.ParenthesisNode         | `'ParenthesisNode'`         | `math.typeOf(math.parse('(2+3)'))`
   * math.RangeNode               | `'RangeNode'`               | `math.typeOf(math.parse('1:10'))`
   * math.SymbolNode              | `'SymbolNode'`              | `math.typeOf(math.parse('x'))`
   *
   * Syntax:
   *
   *    math.typeOf(x)
   *
   * Examples:
   *
   *    math.typeOf(3.5)                     // returns 'number'
   *    math.typeOf(math.complex('2-4i'))    // returns 'Complex'
   *    math.typeOf(math.unit('45 deg'))     // returns 'Unit'
   *    math.typeOf('hello world')           // returns 'string'
   *
   * @param {*} x     The variable for which to test the type.
   * @return {string} Returns the name of the type. Primitive types are lower case,
   *                  non-primitive types are upper-camel-case.
   *                  For example 'number', 'string', 'Array', 'Date'.
   */
  return typed(name, {
    'any': _is.typeOf
  });
}); // For backward compatibility, deprecated since version 6.0.0. Date: 2018-11-06

exports.createTypeOf = createTypeOf;
var createDeprecatedTypeof =
/* #__PURE__ */
(0, _factory.factory)('typeof', [], function () {
  return function () {
    (0, _log.warnOnce)('Function "typeof" has been renamed to "typeOf" in v6.0.0, please use the new function instead.');

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _is.typeOf.apply(_is.typeOf, args);
  };
});
exports.createDeprecatedTypeof = createDeprecatedTypeof;