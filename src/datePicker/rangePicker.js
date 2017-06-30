import React from 'react'
import {DatePicker} from 'xr-component'

function handleChange(props){
	return (date, dateString)=>{
		props.onEvent('onFieldChange', {path:props.path, value:dateString})	
	}
}

export default function Comp(props){
	return <DatePicker.RangePicker {...props} onChange={handleChange(props)} />
}
