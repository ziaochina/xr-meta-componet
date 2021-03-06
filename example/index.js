import {
	config,
	start,
	componentFactory
} from 'xr-meta-engine'

import _src from './src/index.app'

import metaComponents from 'xr-meta-component'

import './src/assets/style/index.less'

config({
	apps: {
		[_src.name]: _src
	},
	targetDomId:'app',
	startAppName:'example',
	toast:metaComponents.Toast,
	notification:metaComponents.Notification,
	modal:metaComponents.Modal
})

Object.keys(metaComponents).forEach(key=>{
	componentFactory.registerComponent(key, metaComponents[key])
})

start()