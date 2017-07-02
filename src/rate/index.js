import React from 'react'
import {Rate} from 'xr-component'


function handleChange(props){
	return (value)=>{
		props.onEvent('onFieldChange', {path:props.path, value})	
	}
}

function Comp(props){
	return <Rate {...props}  onChange={handleChange(props)} />
}


export default Comp
