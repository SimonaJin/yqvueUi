'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('yqv-plus/lib/components/index');
var components$1 = require('yqv-plus/lib/components');

const components = [
    index$1.ZIcon
];
const install = (app) => {
    components.forEach((component) => app.use(component));
};
var index = {
    install,
};

exports["default"] = index;
Object.keys(components$1).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return components$1[k]; }
	});
});
