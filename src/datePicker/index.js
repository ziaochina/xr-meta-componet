import React from 'react'
import {DatePicker} from 'xr-component'
import MonthPicker from './monthPicker'
import RangePicker from './rangePicker'


function handleChange(props){
	return (date, dateString)=>{
		props.onEvent('onFieldChange', {path:props.path, value:dateString})	
	}
}

function Comp(props){
	return <DatePicker {...props} onChange={handleChange(props)} />
}

Comp.MonthPicker = MonthPicker
Comp.RangePicker = RangePicker

export default Comp
