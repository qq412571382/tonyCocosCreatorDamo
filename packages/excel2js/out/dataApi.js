/**
* 本地数据管理
*/
var exp = module.exports = {};

var modules = exp.modules = {};

var names =['DataCommonParameter', 'DataScene', 'DataMsg'];

function create( name ){
	if("DataCommonParameter"==name){
		var DataCommonParameter = require('./RowParser/DataCommonParameter');
		return new DataCommonParameter();
	}
	else if("DataScene"==name){
		var DataScene = require('./RowParser/DataScene');
		return new DataScene();
	}
	else if("DataMsg"==name){
		var DataMsg = require('./RowParser/DataMsg');
		return new DataMsg();
	}
}
function doman(){   
    for(var i = 0 ; i < 3 ; ++i ){
        var name = names[i];
        Object.defineProperty(exp, name, {
            get: (function (name) {
                var mod = modules[name];
                return function () {
                {
                    mod = modules[name] = create( name );
                }
                return mod;
            }
            })(name)
        });
    } 
}
doman();
window.DataApi = exp
