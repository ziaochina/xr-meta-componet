import React from 'react'
import {Radio} from 'xr-component'


function handleChange(props){
	return (value)=>{
		props.onEvent('onFieldChange', {path:props.path, value})	
	}
}

function Comp(props){
	return <Radio {...props}  onChange={handleChange(props)} />
}


export default Comp
