const mongoose =require('mongoose')
const Schema = mongoose.Schema;
const customerSchema = new Schema({
	name:{type:String},
	pwd:{type:String}
	uId:{type:Number}
});