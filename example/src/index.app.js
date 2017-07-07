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
                style: { flexWrap: 'wrap' },
                children: [{
                        name: 'a',
                        component: '::a',
                        children: 'fewfew'
                }, {
                        name: 'input',
                        component: '::input',
                        value: 'fewfew'
                }, "icon:", {
                        name: 'icon',
                        component: 'Icon',
                        type: 'github',
                        showStyle: 'showy'
                }, "Button:", {
                        name: 'button',
                        type: 'softly',
                        component: 'Button',
                        children: 'fewfewfew',
                        style: {
                                width: 120
                        }
                }, "Input:", {
                        name: 'input1',
                        component: 'Input',
                        bindField: 'form.input',
                        style: {
                                width: 120
                        }
                }, "InputNumber:", {
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
                }, {
                        name: 'Switch',
                        component: 'Switch',
                        bindField: 'form.Switch',
                        style: {
                                width: 200
                        }
                }, {
                        name: 'Rate',
                        component: 'Rate',
                        bindField: 'form.Rate',
                        style: {
                                width: 200
                        }
                }, {
                        name: 'Slider',
                        component: 'Slider',
                        bindField: 'form.Slider',
                        style: {
                                width: 200
                        }
                }, {
                        name: 'Card',
                        component: 'Card',
                        title: 'Card',
                        children: 'fewfewfew'
                }, {
                        name: 'Upload',
                        component: 'Upload',
                        children: [{
                                name: 'uploadbutton',
                                component: 'Button',
                                children: 'Upload'
                        }]
                }, {
                        name: 'Collapse',
                        component: 'Collapse',
                        children: [{
                                name: 'Collapse.Panel1',
                                component: 'Collapse.Panel',
                                header: 'Collapse.Panel1',
                                children: 'ddd'

                        }, {
                                name: 'Collapse.Panel2',
                                component: 'Collapse.Panel',
                                header: 'Collapse.Panel2',
                                children: 'ddd'

                        }]
                }, {
                        name: 'Menu',
                        component: 'Menu',
                        mode: 'inline',
                        style: { width: 180 },
                        children: [{
                                name: 'submenu1',
                                component: 'Menu.SubMenu',
                                title: 'submenu1',
                                children: [{
                                        name: 'menuItem',
                                        component: 'Menu.Item',
                                        children: 'fewfew'
                                }]
                        }]
                }, {
                        name: 'toast',
                        component: 'Button',
                        style: { width: 100 },
                        children: 'toast',
                        onClick: "{{$onToast}}"
                }, {
                        name: 'notification',
                        component: 'Button',
                        style: { width: 100 },
                        children: 'notification',
                        onClick: "{{$onNotification}}"
                }, {
                        name: 'modal',
                        component: 'Button',
                        style: { width: 100 },
                        children: 'modal',
                        onClick: "{{$onModal}}"
                }, {
                        name: 'confirm',
                        component: 'Button',
                        style: { width: 100 },
                        children: 'confirm',
                        onClick: "{{$onConfirm}}"
                }, {
                        name: 'dataGridContainder',
                        component: '::div',
                        style: { width: 500, height: 300, display: 'flex' },
                        children: [{
                                name: 'datagrid',
                                component: 'DataGrid',
                                headerHeight: 35,
                                rowsCount: 100,
                                rowHeight: 35,
                                footerHeight: 35,
                                columns: [{
                                        columnKey: 'select',
                                        name: 'select',
                                        component: 'DataGrid.Column',
                                        header: {
                                                name: 'selectHeader',
                                                component: 'DataGrid.Cell',
                                                children: {
                                                        name: 'selectHeaderInternal',
                                                        component: 'Checkbox'
                                                }
                                        },
                                        cell:{
                                                name:'selectCell',
                                                component:'DataGrid.Cell',
                                                _power:'({rowIndex})=>rowIndex',
                                                children:{
                                                        name:'checkbox',
                                                        component:'Checkbox',
                                                        onChange:'{{$dataGridSelectChange}}'
                                                }
                                        },
                                        width: 50
                                }, {
                                        columnKey: 'oprate',
                                        name: 'oprate',
                                        component: 'DataGrid.Column',
                                        header: {
                                                name: 'codeHeader',
                                                component: 'DataGrid.Cell',
                                                children: 'oprate'
                                        },
                                        cell: {
                                                name:'oprateCell',
                                                component:'DataGrid.Cell',
                                                _power:'({rowIndex})=>rowIndex',
                                                children:[{
                                                        name:'githubIcon',
                                                        component:'Icon',
                                                        showStyle:'showy',
                                                        style:{marginRight:8}
                                                },{
                                                        name:'githubIcon1',
                                                        component:'Icon',
                                                }]
                                        },
                                        width: 50

                                }, {
                                        columnKey: 'code',
                                        name: 'code',
                                        component: 'DataGrid.Column',
                                        flexGrow: 1,
                                        header: {
                                                name: 'codeHeader',
                                                component: 'DataGrid.Cell',
                                                children: 'code'
                                        },
                                        cell: {
                                                name: 'codeCell',
                                                component: 'DataGrid.Cell',
                                                children:'{{data.datagrid[_rowIndex].code}}',
                                                _power:'({rowIndex})=>rowIndex'
                                        },
                                        footer: {
                                                name: 'codeFooter',
                                                component: 'DataGrid.Cell',
                                                children: 'total'
                                        },
                                        width: 200

                                }, {
                                        columnKey: 'name',
                                        name: 'name',
                                        component: 'DataGrid.Column',
                                        flexGrow: 1,
                                        header: {
                                                name: 'nameHeader',
                                                component: 'DataGrid.Cell',
                                                children: 'name'
                                        },
                                        cell: {
                                                name: 'nameCell',
                                                component: 'DataGrid.Cell',
                                                children:'{{data.datagrid[_rowIndex].name}}',
                                                _power:'({rowIndex})=>rowIndex'
                                        },
                                        footer: {
                                                name: 'nameFooter',
                                                component: 'DataGrid.Cell',
                                                children: 'total'
                                        },
                                        width: 200

                                }]
                        }]

                }]

        }
}