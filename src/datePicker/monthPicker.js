import React from 'react'
import moment from 'moment'
import {DatePicker} from 'xr-component'


function handleChange(props){
	return (date, dateString)=>{
		props.onEvent('onFieldChange', {path:props.path, value:dateString})	
	}
}

export default function Comp(props){
	return <DatePicker.MonthPicker {...props} value={moment(props.value, props.format)} onChange={handleChange(props)} />
}
