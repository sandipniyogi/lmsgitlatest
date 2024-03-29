"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHelp = void 0;

var _factory = require("../../utils/factory");

var _customs = require("../../utils/customs");

var _embeddedDocs = require("../embeddedDocs/embeddedDocs");

var name = 'help';
var dependencies = ['typed', 'mathWithTransform', 'Help'];
var createHelp =
/* #__PURE__ */
(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
      mathWithTransform = _ref.mathWithTransform,
      Help = _ref.Help;

  /**
   * Retrieve help on a function or data type.
   * Help files are retrieved from the embedded documentation in math.docs.
   *
   * Syntax:
   *
   *    math.help(search)
   *
   * Examples:
   *
   *    console.log(math.help('sin').toString())
   *    console.log(math.help(math.add).toString())
   *    console.log(math.help(math.add).toJSON())
   *
   * @param {Function | string | Object} search   A function or function name
   *                                              for which to get help
   * @return {Help} A help object
   */
  return typed(name, {
    'any': function any(search) {
      var prop;
      var searchName = search;

      if (typeof search !== 'string') {
        for (prop in mathWithTransform) {
          // search in functions and constants
          if (mathWithTransform.hasOwnProperty(prop) && search === mathWithTransform[prop]) {
            searchName = prop;
            break;
          }
        }
        /* TODO: implement help for data types
         if (!text) {
         // search data type
         for (prop in math.type) {
         if (math.hasOwnProperty(prop)) {
         if (search === math.type[prop]) {
         text = prop
         break
         }
         }
         }
         }
         */

      }

      var doc = (0, _customs.getSafeProperty)(_embeddedDocs.embeddedDocs, searchName);

      if (!doc) {
        var searchText = typeof searchName === 'function' ? searchName.name : searchName;
        throw new Error('No documentation found on "' + searchText + '"');
      }

      return new Help(doc);
    }
  });
});
exports.createHelp = createHelp;