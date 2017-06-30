import React from 'react'
import {Input} from 'xr-component'
import InputNumber from './inputNumber'

function handleChange(props){
	return (e)=>{
		props.onEvent('onFieldChange', {path:props.path, value:e.target.value})	
	}
}

function Comp(props){
	return <Input {...props} onChange={handleChange(props)} />
}

Comp.Number = InputNumber

export default Comp
