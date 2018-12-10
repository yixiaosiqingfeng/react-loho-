const express=require('express');
const Router=express.Router();

//引入数据模型
const userModel=require('../model/userModel.js');//引入数据模型
////引入邮箱
//const mail=require('../mailer.js');
//引入工具模块
const util=require('../utils/util.js');

const obj={};


//插入数据，生成表
//Router.post('/reg',(req,res)=>{
//	let {us,pass,code}=req.body;
//	userModel.insertMany({us,pass})
//	.then((data)=>{
//		res.send(util.sendData(0,'注册ok 请登录',null))
//	})
//	.catch((err)=>{
//		console.log(err)
//		res.send(util.sendData(-1,'注册失败',null))
//	})
//	
//})


//注册
Router.post('/reg',(req,res)=>{
	let {us,pass}=req.body;
//	if (obj[us]!==code) { return res.send(util.sendData(-1,'验证码错误',null) )}
	userModel.find({us})//查询数据库里的用户名
	.then((data)=>{
		if(data.length){
			//长度不为0，代表用户存在，不能注册
			throw new Error('用户已存在');
		}else{
			//长度为0，代表用户不存在，可以注册
		    return userModel.insertMany({us,pass});
		}
	})
	.then((data)=>{
		res.send(util.sendData(0,'注册ok 请登录',null))
	})
	.catch((err)=>{
		console.log(err)
		res.send(util.sendData(-1,'注册失败',null))
	})
	
})




//登陆
Router.post('/login',(req,res)=>{//登陆时params处登陆
    //获取get的数据信息
    console.log(req);
    let {us,pass}=req.body;
//  console.log(us);
    userModel.find({us,pass})
    .then((data)=>{
    	if(data.length>=1){
    		return res.send(util.sendData(0,'登陆成功',null));
    	}
    	res.send(util.sendData(-1,'登陆失败',null));
    })
   
})

// 获取邮箱验证码
//
///**
// * @api {post} /user/getcode/ 获取邮箱验证码
// * @apiName getcode
// * @apiGroup user
// *
// * @apiParam {String} email 用户邮箱
// *
// * @apiSuccess {String} err Firstname of the user.
// * @apiSuccess {String} msg  Lastname of the user.
// */
//Router.post('/getcode',(req,res)=>{//去postman获取验证码时，点击body处输入参数email
////	console.log(req);
//	let {email}=req.body//把数据存到变量email中去
//	console.log(email);
//	if (!email||email=="") {
//		return res.send(util.sendData(-1,'参数错误',null));
//	}
//  let num1=(parseInt(Math.random(0,1)*1000)).toString();
//  //生成验证码
//	mail.sendmail(email,num1)//email发送给哪个邮箱，num1表示验证码
//	.then((resolve)=>{
//		obj[email]=num1
//		//保存验证码信息
//		// console.log(obj)
//		res.send(util.sendData(0,'验证码已发送',null));
//	})
//	.catch((err)=>{
//		console.log(err);
//		res.send(util.sendData(-1,'验证码发送失败',null));
//	})
//	
//})

module.exports=Router//抛出路由