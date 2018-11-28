import Top from './components/Top.vue';
export default{
	install(Vue){
		
		Vue.component('top',Top)
		//把ui框架的组件挂载在自己的实例上
		Vue.directive('scroll-hide',{
			bind(el,binding,vnode){//bind生命周期函数
//				console.log(el);//自定义指令绑定的节点
//				console.log(binding);//绑定对象
//				console.log(vnode);//虚拟dom
				//vnode 可以拿到isShow
//				console.log(666)
				let distance=el.getAttribute('scroll-hide-distance');//获取设定的阈值
//				console.log(distance);//可以获取到距离
				window.addEventListener('scroll',function(){//添加滚动监听
					let NowDistance=document.documentElement.scrollTop;//获取当前位置
					//根据距离修改显示隐藏
//				console.log(NowDistance);//可以获取到距离
					if(NowDistance>distance){
						vnode.context.isShow=true;
					}
//					if(NowDistance>distance){
//						if(vnode.context.isShow=false){
//							vnode.context.isShow=true;
//						}
//					}
//					else{
//						if(vnode.context.isShow=true){
//							vnode.context.isShow=false;
//						}
//						
//					}
				})
			}
})
	//创建自定义指令
    // 实现回到顶部
   Vue.directive('go-top',{
      bind(el,binding,vnode){
          //监听元素是否被点击
//        console.log(binding)
          let eventType=binding.arg
           // let eventType=binding.modifiers//第一种方式通过arg 来获取
          // let eventType=binding.expression
          // console.log(eventType)
          el.addEventListener(eventType,()=>{
            console.log('点到我了')
            document.documentElement.scrollTop=0;  
          })
         // 
      }
    })
   
   }
}
 

