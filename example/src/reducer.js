import { Map } from 'immutable'

import { reducer as MetaReducer } from 'xr-meta-engine'

import * as api from './api'

class reducer{
	constructor(option){
		this.metaReducer = option.metaReducer
	}

	init = (state, option) => {
		const data = {data:{datagrid:[]}}
		for(let i = 0 ;i <100; i ++){
			data.data.datagrid.push({code:`code${i}`, name:`name${i}`})
		}

		return this.metaReducer.init(state, data)
	}
}

export default function creator(option){
	const metaReducer = new MetaReducer(option),
		o = new reducer({...option, metaReducer})

	return {...metaReducer, ...o}

}