import React from 'react'
import {DataGrid, Icon, Checkbox} from 'xr-meta-component'
import { action as MetaAction } from 'xr-meta-engine'


class action {
	constructor(option){
		this.metaAction = option.metaAction
	}

	onInit = ({component, injections}) =>{
		this.component = component
		this.injections = injections
		injections.reduce('init')
	}

	onToast= () =>{
		this.metaAction.toast('info','This is a message of info')
	}

	onNotification = () => {
		this.metaAction.notification('open',{
            message: '通知标题',
            description: '通知内容',
        })
	}

	onModal = async () =>{
		const r = await this.metaAction.modal('show',{
            title:"Basic Modal",
            children:(<div><p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p></div>)
        })

        console.log(r)
	}

	onConfirm = async() =>{
		const r = await this.metaAction.modal('confirm',{title:'confirm', content:'confirm'})
		console.log(r)
	}


	getNameCell = ({rowIndex})=>{
		const name = this.metaAction.gf(`data.datagrid.${rowIndex}.name`)
		return <DataGrid.Cell>{name}</DataGrid.Cell>
	}

	dataGridSelectChange = (...args)=>{

		const o = args
		debugger
	}

	getDataGridSelect = ({rowIndex})=>{
		if(rowIndex == 1)
			return false

		return true
	}
}

export default function creator(option){
	const metaAction = new MetaAction(option),
		o = new action({...option, metaAction}),
		ret = {...metaAction, ...o}

	metaAction.config({ metaHandlers:ret})

	return ret
}