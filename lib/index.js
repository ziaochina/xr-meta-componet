'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _xrComponent = require('xr-component');

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _datePicker = require('./datePicker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

var _switch = require('./switch');

var _switch2 = _interopRequireDefault(_switch);

var _rate = require('./rate');

var _rate2 = _interopRequireDefault(_rate);

var _slider = require('./slider');

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	Layout: _xrComponent.Layout,
	Input: _input2.default,
	Button: _xrComponent.Button,
	Icon: _xrComponent.Icon,
	DatePicker: _datePicker2.default,
	Checkbox: _checkbox2.default,
	Radio: _radio2.default,
	Switch: _switch2.default,
	Rate: _rate2.default,
	Slider: _slider2.default,
	Upload: _xrComponent.Upload,
	Card: _xrComponent.Card,
	Collapse: _xrComponent.Collapse,
	Menu: _xrComponent.Menu,
	Tabs: _xrComponent.Tabs,
	Toast: _xrComponent.Toast,
	Notification: _xrComponent.Notification,
	Modal: _xrComponent.Modal,
	DataGrid: _xrComponent.DataGrid
};
module.exports = exports['default'];