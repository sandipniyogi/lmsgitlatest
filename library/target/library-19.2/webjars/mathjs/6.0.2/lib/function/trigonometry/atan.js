"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAtan = void 0;

var _factory = require("../../utils/factory");

var _collection = require("../../utils/collection");

var name = 'atan';
var dependencies = ['typed'];
var createAtan =
/* #__PURE__ */
(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;

  /**
   * Calculate the inverse tangent of a value.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.atan(x)
   *
   * Examples:
   *
   *    math.atan(0.5)           // returns number 0.4636476090008061
   *    math.atan(math.tan(1.5)) // returns number 1.5
   *
   *    math.atan(2)             // returns Complex 1.5707963267948966 -1.3169578969248166 i
   *
   * See also:
   *
   *    tan, asin, acos
   *
   * @param {number | BigNumber | Complex | Array | Matrix} x   Function input
   * @return {number | BigNumber | Complex | Array | Matrix} The arc tangent of x
   */
  var atan = typed('atan', {
    'number': function number(x) {
      return Math.atan(x);
    },
    'Complex': function Complex(x) {
      return x.atan();
    },
    'BigNumber': function BigNumber(x) {
      return x.atan();
    },
    'Array | Matrix': function ArrayMatrix(x) {
      // deep map collection, skip zeros since atan(0) = 0
      return (0, _collection.deepMap)(x, atan, true);
    }
  });
  return atan;
});
exports.createAtan = createAtan;