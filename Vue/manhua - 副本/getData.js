const express=require('express');
const Router=express.Router();


Router.get('/Data',(req,res)=>{//直接/login
	//要传过去的参数是什么

	const json=require('./static/data.json');
	console.log(json)
	res.send(json)
})
module.exports=Router;//抛出路由给server接收