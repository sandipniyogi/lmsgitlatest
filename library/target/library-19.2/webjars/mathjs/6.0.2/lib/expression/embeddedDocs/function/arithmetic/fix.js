"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixDocs = void 0;
var fixDocs = {
  'name': 'fix',
  'category': 'Arithmetic',
  'syntax': ['fix(x)'],
  'description': 'Round a value towards zero. If x is complex, both real and imaginary part are rounded towards zero.',
  'examples': ['fix(3.2)', 'fix(3.8)', 'fix(-4.2)', 'fix(-4.8)'],
  'seealso': ['ceil', 'floor', 'round']
};
exports.fixDocs = fixDocs;