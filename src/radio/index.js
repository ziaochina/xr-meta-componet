import React from 'react'
import {Radio} from 'xr-component'


function handleChange(props){
	return (e)=>{
		props.onEvent('onFieldChange', {path:props.path, value:e.target.checked})	
	}
}

function Comp(props){
	return <Radio {...props}  onChange={handleChange(props)} />
}


export default Comp
