'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./icon/index');



Object.keys(index).forEach(function (k) {
if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
enumerable: true,
get: function () { return index[k]; }
});
});
