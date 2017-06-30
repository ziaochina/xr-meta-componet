export function getMeta(){
	return {
	  	name: 'root',
        component: 'Layout',
        children:[{
        	name:'button',
        	type:'softly',
        	component:'Button',
        	children:'fewfewfew',
        	style:{width:100,height:100}
        },{
        	name:'input',
        	component:'Input',
        	style:{width:100,height:100}
        }]

	}
}