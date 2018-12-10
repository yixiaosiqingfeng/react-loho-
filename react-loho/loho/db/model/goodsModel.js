const mongoose = require('mongoose')
let Schema = mongoose.Schema;

let layoutSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	img: {
		type: String,
		required: true
	},
	desc: {
		type: String,
		required: true
	},
	info: {
		type: String,
		required: true
	},
	createTime: {
		type: Date,
		default: Date.now
	},
	updateTime: {
		type: Date,
		default: Date.now
	}
}, {
	versionKey: false,
	timestamps: {
		createdAt: 'createTime',
		updatedAt: 'updateTime'
	}

})
// type 字段类型  required 是否必须
let layoutmodel = mongoose.model('layout', layoutSchema);
//参数1  集合名字  参数2是 schema对象 将schema对象变成model
module.exports = layoutmodel