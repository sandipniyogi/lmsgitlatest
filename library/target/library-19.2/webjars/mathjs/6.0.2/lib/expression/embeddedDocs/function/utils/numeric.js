"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numericDocs = void 0;
var numericDocs = {
  'name': 'numeric',
  'category': 'Utils',
  'syntax': ['numeric(x)'],
  'description': 'Convert a numeric input to a specific numeric type: number, BigNumber, or Fraction.',
  'examples': ['numeric("4")', 'numeric("4", "number")', 'numeric("4", "BigNumber")', 'numeric("4", "Fraction)', 'numeric(4, "Fraction")', 'numeric(fraction(2, 5), "number)'],
  'seealso': ['number', 'fraction', 'bignumber', 'string', 'format']
};
exports.numericDocs = numericDocs;