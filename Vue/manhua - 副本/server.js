const express=require('express');
const app=express();

const getData=require('./getData.js');//链接路由那边
app.use('/api/getData',getData);

app.listen(8088,()=>{
	console.log('开启成功');
})