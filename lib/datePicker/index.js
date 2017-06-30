'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _xrComponent = require('xr-component');

var _monthPicker = require('./monthPicker');

var _monthPicker2 = _interopRequireDefault(_monthPicker);

var _rangePicker = require('./rangePicker');

var _rangePicker2 = _interopRequireDefault(_rangePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleChange(props) {
	return function (date, dateString) {
		props.onEvent('onFieldChange', { path: props.path, value: dateString });
	};
}

function Comp(props) {
	return _react2.default.createElement(_xrComponent.DatePicker, (0, _extends3.default)({}, props, { onChange: handleChange(props) }));
}

Comp.MonthPicker = _monthPicker2.default;
Comp.RangePicker = _rangePicker2.default;

exports.default = Comp;
module.exports = exports['default'];