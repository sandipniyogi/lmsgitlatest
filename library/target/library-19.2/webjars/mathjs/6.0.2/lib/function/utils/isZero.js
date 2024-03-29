"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIsZero = void 0;

var _collection = require("../../utils/collection");

var _factory = require("../../utils/factory");

var _number = require("../../plain/number");

var name = 'isZero';
var dependencies = ['typed'];
var createIsZero =
/* #__PURE__ */
(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;

  /**
   * Test whether a value is zero.
   * The function can check for zero for types `number`, `BigNumber`, `Fraction`,
   * `Complex`, and `Unit`.
   *
   * The function is evaluated element-wise in case of Array or Matrix input.
   *
   * Syntax:
   *
   *     math.isZero(x)
   *
   * Examples:
   *
   *    math.isZero(0)                     // returns true
   *    math.isZero(2)                     // returns false
   *    math.isZero(0.5)                   // returns false
   *    math.isZero(math.bignumber(0))     // returns true
   *    math.isZero(math.fraction(0))      // returns true
   *    math.isZero(math.fraction(1,3))    // returns false
   *    math.isZero(math.complex('2 - 4i') // returns false
   *    math.isZero(math.complex('0i')     // returns true
   *    math.isZero('0')                   // returns true
   *    math.isZero('2')                   // returns false
   *    math.isZero([2, 0, -3]')           // returns [false, true, false]
   *
   * See also:
   *
   *    isNumeric, isPositive, isNegative, isInteger
   *
   * @param {number | BigNumber | Complex | Fraction | Unit | Array | Matrix} x       Value to be tested
   * @return {boolean}  Returns true when `x` is zero.
   *                    Throws an error in case of an unknown data type.
   */
  var isZero = typed(name, {
    'number': _number.isZeroNumber,
    'BigNumber': function BigNumber(x) {
      return x.isZero();
    },
    'Complex': function Complex(x) {
      return x.re === 0 && x.im === 0;
    },
    'Fraction': function Fraction(x) {
      return x.d === 1 && x.n === 0;
    },
    'Unit': function Unit(x) {
      return isZero(x.value);
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return (0, _collection.deepMap)(x, isZero);
    }
  });
  return isZero;
});
exports.createIsZero = createIsZero;