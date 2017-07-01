import React from 'react'
import moment from 'moment'
import {Checkbox} from 'xr-component'


function handleChange(props){
	return (date, e)=>{
		debugger
		props.onEvent('onFieldChange', {path:props.path, value:v})	
	}
}

function Comp(props){
	return <Checkbox {...props}  onChange={handleChange(props)} />
}


export default Comp
