import React from 'react'
import moment from 'moment'
import {Checkbox} from 'xr-component'


function handleChange(props){
	return (e)=>{
		props.onEvent('onFieldChange', {path:props.path, value:e.target.checked})	
	}
}

function Comp(props){
	return <Checkbox {...props}  onChange={handleChange(props)} />
}


export default Comp
