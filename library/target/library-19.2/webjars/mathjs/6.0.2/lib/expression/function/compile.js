"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCompile = void 0;

var _collection = require("../../utils/collection");

var _factory = require("../../utils/factory");

var name = 'compile';
var dependencies = ['typed', 'parse'];
var createCompile =
/* #__PURE__ */
(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
      parse = _ref.parse;

  /**
   * Parse and compile an expression.
   * Returns a an object with a function `evaluate([scope])` to evaluate the
   * compiled expression.
   *
   * Syntax:
   *
   *     math.compile(expr)                       // returns one node
   *     math.compile([expr1, expr2, expr3, ...]) // returns an array with nodes
   *
   * Examples:
   *
   *     const code1 = math.compile('sqrt(3^2 + 4^2)')
   *     code1.evaluate() // 5
   *
   *     let scope = {a: 3, b: 4}
   *     const code2 = math.compile('a * b') // 12
   *     code2.evaluate(scope) // 12
   *     scope.a = 5
   *     code2.evaluate(scope) // 20
   *
   *     const nodes = math.compile(['a = 3', 'b = 4', 'a * b'])
   *     nodes[2].evaluate() // 12
   *
   * See also:
   *
   *    parse, evaluate
   *
   * @param {string | string[] | Array | Matrix} expr
   *            The expression to be compiled
   * @return {{evaluate: Function} | Array.<{evaluate: Function}>} code
   *            An object with the compiled expression
   * @throws {Error}
   */
  return typed(name, {
    'string': function string(expr) {
      return parse(expr).compile();
    },
    'Array | Matrix': function ArrayMatrix(expr) {
      return (0, _collection.deepMap)(expr, function (entry) {
        return parse(entry).compile();
      });
    }
  });
});
exports.createCompile = createCompile;