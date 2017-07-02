import React from 'react'
import {Switch} from 'xr-component'


function handleChange(props){
	return (value)=>{
		props.onEvent('onFieldChange', {path:props.path, value})	
	}
}

function Comp(props){
	return <Switch {...props}  onChange={handleChange(props)} />
}


export default Comp
