import React, { Component } from 'react'

import { wrapper } from 'xr-meta-engine'

import appInfo from './index.app'

@wrapper(appInfo)
export default class exampleComponent extends Component {
	render() {
		return  this.props.monkeyKing({...this.props, path:'root'})
	}
}