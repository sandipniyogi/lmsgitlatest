"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIsPositive = void 0;

var _collection = require("../../utils/collection");

var _factory = require("../../utils/factory");

var _number = require("../../plain/number");

var name = 'isPositive';
var dependencies = ['typed'];
var createIsPositive =
/* #__PURE__ */
(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;

  /**
   * Test whether a value is positive: larger than zero.
   * The function supports types `number`, `BigNumber`, `Fraction`, and `Unit`.
   *
   * The function is evaluated element-wise in case of Array or Matrix input.
   *
   * Syntax:
   *
   *     math.isPositive(x)
   *
   * Examples:
   *
   *    math.isPositive(3)                     // returns true
   *    math.isPositive(-2)                    // returns false
   *    math.isPositive(0)                     // returns false
   *    math.isPositive(-0)                    // returns false
   *    math.isPositive(0.5)                   // returns true
   *    math.isPositive(math.bignumber(2))     // returns true
   *    math.isPositive(math.fraction(-2, 5))  // returns false
   *    math.isPositive(math.fraction(1,3))    // returns false
   *    math.isPositive('2')                   // returns true
   *    math.isPositive([2, 0, -3])            // returns [true, false, false]
   *
   * See also:
   *
   *    isNumeric, isZero, isNegative, isInteger
   *
   * @param {number | BigNumber | Fraction | Unit | Array | Matrix} x  Value to be tested
   * @return {boolean}  Returns true when `x` is larger than zero.
   *                    Throws an error in case of an unknown data type.
   */
  var isPositive = typed(name, {
    'number': _number.isPositiveNumber,
    'BigNumber': function BigNumber(x) {
      return !x.isNeg() && !x.isZero() && !x.isNaN();
    },
    'Fraction': function Fraction(x) {
      return x.s > 0 && x.n > 0;
    },
    'Unit': function Unit(x) {
      return isPositive(x.value);
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return (0, _collection.deepMap)(x, isPositive);
    }
  });
  return isPositive;
});
exports.createIsPositive = createIsPositive;