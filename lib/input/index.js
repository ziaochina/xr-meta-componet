'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _xrComponent = require('xr-component');

var _inputNumber = require('./inputNumber');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleChange(props) {
	return function (e) {
		props.onEvent('onFieldChange', { path: props.path, value: e.target.value });
	};
}

function InputComponent(props) {
	return _react2.default.createElement(_xrComponent.Input, (0, _extends3.default)({}, props, { onChange: handleChange(props) }));
}

InputComponent.InputNumber = _inputNumber2.default;

exports.default = InputComponent;
module.exports = exports['default'];