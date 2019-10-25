"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bellNumbersDocs = void 0;
var bellNumbersDocs = {
  'name': 'bellNumbers',
  'category': 'Combinatorics',
  'syntax': ['bellNumbers(n)'],
  'description': 'The Bell Numbers count the number of partitions of a set. A partition is a pairwise disjoint subset of S whose union is S. `bellNumbers` only takes integer arguments. The following condition must be enforced: n >= 0.',
  'examples': ['bellNumbers(3)', 'bellNumbers(8)'],
  'seealso': ['stirlingS2']
};
exports.bellNumbersDocs = bellNumbersDocs;