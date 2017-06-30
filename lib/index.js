'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _xrComponent = require('xr-component');

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _datePicker = require('./datePicker');

var _datePicker2 = _interopRequireDefault(_datePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	Layout: _xrComponent.Layout,
	Input: _input2.default,
	Button: _xrComponent.Button,
	Icon: _xrComponent.Icon,
	DatePicker: _datePicker2.default
};
module.exports = exports['default'];