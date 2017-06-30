module.exports = {
	name: 'example',
	version: '0.0.1',
	description: 'example',
	author: '',
	meta:getMeta(),
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, 'example')
	}
}

export function getMeta(){
        return {
          	name: 'root',
                component: 'Layout',
                direction: 'row',
                children:[{
                	name:'button',
                	type:'softly',
                	component:'Button',
                	children:'fewfewfew',
                	onClick:'$$buttonClick',
                	style:{width:100,height:100}
                },{
                	name:'input',
                	component:'Input',
                	style:{width:100,height:100},
                	bindField:'form.input'
                },{
                        name:'inputNumber',
                        component:'Input.Number',
                        style:{width:100,height:100},
                }, {
                        name: 'icon',
                        component: 'Icon',
                        type: 'github',
                        showStyle: 'showy'
                }]

        }
}