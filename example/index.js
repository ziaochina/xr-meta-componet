import {
	config,
	start,
	componentFactory
} from 'xr-meta-engine'

import _src from './src/index.app'

import metaComponents from '../src'

import './src/assets/style/index.less'

config({
	apps: {
		[_src.name]: _src
	},
	targetDomId:'app',
	startAppName:'example'
})

let mmm = metaComponents

debugger

Object.keys(metaComponents).forEach(key=>{
	componentFactory.registerComponent(key, metaComponents[key])
})

start()