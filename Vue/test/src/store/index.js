import Vue from 'vue'//引入vue模块
import Vuex from 'vuex'//引入vue模块
Vue.use(Vuex)

export default new Vuex.Store({//创建Vue实例并抛出
	state:{//单一状态树（每一个应用仅包含一个实例）
		login:window.localStorage.getItem('login')?window.localStorage.getItem('login'):false
	},
	
})
