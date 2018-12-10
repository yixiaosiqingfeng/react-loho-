const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const db=require('./db/dbconnect/dbconnect.js');//引入数据库
//const proxy = require("http-proxy-middleware")// 允许所有域名跨域

//post参数解析
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//引用路由
const user=require('./db/router/user.js');

//调用路由
app.use('/api/user',user);


// 允许所有域名跨域
//app.all('*', function(req, res, next) {
//       res.header("Access-Control-Allow-Origin", "*");
//       res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//       res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//       res.header("X-Powered-By", ' 3.2.1')
//       
//       // 跨域请求CORS中的预请求
//       if (req.method == "OPTIONS"){
//                   res.send(200); //让options请求快速返回
//       }
//       else{
//                   next();
//       }
//});
//// 设置代理
//app.use("api",proxy({
//       "target":"http://m.loho88.com",
//       "changeOrigin":true,
//       "pathRewrite":{
//                   "^/api":"/"
//       }
//}))


app.listen(40000,()=>{
	console.log('服务器启动');
})