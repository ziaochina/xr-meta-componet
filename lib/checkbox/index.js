'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _xrComponent = require('xr-component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleChange(props) {
	return function (e) {
		props.onEvent('onFieldChange', { path: props.path, value: e.target.checked });
	};
}

function Comp(props) {
	return _react2.default.createElement(_xrComponent.Checkbox, (0, _extends3.default)({}, props, { onChange: handleChange(props) }));
}

exports.default = Comp;
module.exports = exports['default'];