import { action } from 'xr-meta-engine'

import appInfo from './index.app'

const event = {
	'root': {
		onInit: init
	}
}

const _a = new action({ appInfo, event})

var _i

function init({ component, injections}) {
	_i = injections
	_i.reduce('init')
}

Object.assign(exports, {..._a, ...exports })