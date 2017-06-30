import React from 'react'
import {Input} from 'xr-component'

function handleChange(props){
	return (e)=>{
		props.onEvent('onFieldChange', {path:props.path, value:e.target.value})	
	}
}

export default function Comp(props){
	return <Input.Number {...props} onChange={handleChange(props)} />
}
