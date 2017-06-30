import React from 'react'
import {Input} from 'xr-component'

function handleChange(props){
	return (e)=>{
		debugger
		props.onEvent('onFieldChange', {path:props.path, value:e.target.value})	
	}
}

export default function InputComponent(props){
	debugger
	return <Input {...props} onChange={handleChange(props)}/>
}
