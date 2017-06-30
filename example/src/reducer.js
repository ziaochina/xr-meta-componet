import { Map } from 'immutable'

import { reducer } from 'xr-meta-engine'

import * as api from './api'

import appInfo from './index.app'

const _r = new reducer({appInfo})

export function init(state, option) {
	const data = {}

	return _r.init(state, {
		data
	})
}

export function buttonClick(state){
	return _r.setField(state, 'form.input' ,'ddddddddd')
}

Object.assign(exports, {..._r, ...exports })