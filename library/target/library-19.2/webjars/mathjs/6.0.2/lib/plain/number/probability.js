"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gammaNumber = gammaNumber;
exports.gammaP = exports.gammaG = void 0;

var _number = require("../../utils/number");

var _product = require("../../utils/product");

function gammaNumber(n) {
  var t, x;

  if ((0, _number.isInteger)(n)) {
    if (n <= 0) {
      return isFinite(n) ? Infinity : NaN;
    }

    if (n > 171) {
      return Infinity; // Will overflow
    }

    return (0, _product.product)(1, n - 1);
  }

  if (n < 0.5) {
    return Math.PI / (Math.sin(Math.PI * n) * gammaNumber(1 - n));
  }

  if (n >= 171.35) {
    return Infinity; // will overflow
  }

  if (n > 85.0) {
    // Extended Stirling Approx
    var twoN = n * n;
    var threeN = twoN * n;
    var fourN = threeN * n;
    var fiveN = fourN * n;
    return Math.sqrt(2 * Math.PI / n) * Math.pow(n / Math.E, n) * (1 + 1 / (12 * n) + 1 / (288 * twoN) - 139 / (51840 * threeN) - 571 / (2488320 * fourN) + 163879 / (209018880 * fiveN) + 5246819 / (75246796800 * fiveN * n));
  }

  --n;
  x = gammaP[0];

  for (var i = 1; i < gammaP.length; ++i) {
    x += gammaP[i] / (n + i);
  }

  t = n + gammaG + 0.5;
  return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
}

gammaNumber.signature = 'number'; // TODO: comment on the variables g and p

var gammaG = 4.7421875;
exports.gammaG = gammaG;
var gammaP = [0.99999999999999709182, 57.156235665862923517, -59.597960355475491248, 14.136097974741747174, -0.49191381609762019978, 0.33994649984811888699e-4, 0.46523628927048575665e-4, -0.98374475304879564677e-4, 0.15808870322491248884e-3, -0.21026444172410488319e-3, 0.21743961811521264320e-3, -0.16431810653676389022e-3, 0.84418223983852743293e-4, -0.26190838401581408670e-4, 0.36899182659531622704e-5];
exports.gammaP = gammaP;