module.exports = {
        name: 'example',
        version: '0.0.1',
        description: 'example',
        author: '',
        meta: getMeta(),
        load: (cb) => {
                require.ensure([], require => {
                        cb(require('./component'), require('./action'), require('./reducer'))
                }, 'example')
        }
}

export function getMeta() {
        return {
                name: 'root',
                component: 'Layout',
                direction: 'row',
                style:{flexWrap:'wrap'},
                children: [{
                        name:'a',
                        component:'::a',
                        children:'fewfew'
                },{
                        name:'input',
                        component:'::input',
                        value:'fewfew'
                },"icon:", {
                        name: 'icon',
                        component: 'Icon',
                        type: 'github',
                        showStyle: 'showy'
                },"Button:", {
                        name: 'button',
                        type: 'softly',
                        component: 'Button',
                        children: 'fewfewfew',
                        style: {
                                width: 120
                        }
                },"Input:", {
                        name: 'input',
                        component: 'Input',
                        bindField: 'form.input',
                        style: {
                                width: 120
                        }
                },"InputNumber:", {
                        name: 'inputNumber',
                        component: 'Input.Number',
                        style: {
                                width: 120
                        }
                }, {
                        name: 'DatePicker',
                        component: 'DatePicker',
                        bindField: 'form.datepicker',
                        style: {
                                width: 120
                        }
                }, {
                        name: 'MonthPicker',
                        component: 'DatePicker.MonthPicker',
                        bindField: 'form.MonthPicker',
                        style: {
                                width: 120
                        }
                }, {
                        name: 'RangePicker',
                        component: 'DatePicker.RangePicker',
                        bindField: 'form.RangePicker',
                        style: {
                                width: 200
                        }
                }, {
                        name: 'Checkbox',
                        component: 'Checkbox',
                        bindField: 'form.Checkbox',
                        style: {
                                width: 200
                        }
                }, {
                        name: 'Radio',
                        component: 'Radio',
                        bindField: 'form.Radio',
                        style: {
                                width: 200
                        }
                },{
                        name: 'Switch',
                        component: 'Switch',
                        bindField: 'form.Switch',
                        style: {
                                width: 200
                        }
                },{
                        name: 'Rate',
                        component: 'Rate',
                        bindField: 'form.Rate',
                        style: {
                                width: 200
                        }
                },{
                        name: 'Slider',
                        component: 'Slider',
                        bindField: 'form.Slider',
                        style: {
                                width: 200
                        }
                },{
                        name: 'Card',
                        component: 'Card',
                        title:'Card',
                        children:'fewfewfew'
                },{
                        name: 'Upload',
                        component: 'Upload',
                        children:[{
                                name:'uploadbutton',
                                component:'Button',
                                children:'Upload'
                        }]
                },{
                        name:'Collapse',
                        component:'Collapse',
                        children:[{
                                name:'Collapse.Panel1',
                                component:'Collapse.Panel',
                                header:'Collapse.Panel1',
                                children:'ddd'

                        },{
                                name:'Collapse.Panel2',
                                component:'Collapse.Panel',
                                header:'Collapse.Panel2',
                                children:'ddd'

                        }]
                },{
                        name:'Menu',
                        component:'Menu',
                        mode:'inline',
                        style:{width:180},
                        children:[{
                                name:'submenu1',
                                component:'Menu.SubMenu',
                                title:'submenu1',
                                children:[{
                                        name:'menuItem',
                                        component:'Menu.Item',
                                        children:'fewfew'
                                }]
                        }]
                }]

        }
}