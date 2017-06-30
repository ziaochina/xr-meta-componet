import { action } from 'xr-meta-engine'

import appInfo from './index.app'

const metaHandlers = {
	onInit:init,
	buttonClick:buttonClick
}

const _a = new action({ appInfo, metaHandlers})

var _i

function init({ component, injections}) {
	_i = injections
	_i.reduce('init')
}

function buttonClick(){
	_i.reduce('buttonClick')
}


Object.assign(exports, {..._a, ...exports })