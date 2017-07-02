import React from 'react'
import {Slider} from 'xr-component'


function handleChange(props){
	return (value)=>{
		props.onEvent('onFieldChange', {path:props.path, value})	
	}
}

function Comp(props){
	return <Slider {...props}  onChange={handleChange(props)} />
}


export default Comp
