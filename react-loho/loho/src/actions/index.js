// 关于购物车的actions creater
import * as cart from './cartActions';//{add,remove,change}
//* as：把所有的几个东西都拿到cart里面来，import {add,remove,change} from './cartActions';

export function tabbar(status){//状态//同时抛出tabbar的action(状态状态更新提交)
    return {
        type:'CHANGE_TABBAR_STATUS',//改变底部tabbar的状态
        payload:status
    }
}

export function tab(status){//状态//同时抛出infotab的action(状态状态更新提交)
    return {
        type:'CHANGE_INFOTAB_STATUS',//改变infotab的状态
        payload:status
    }
}
export function mytab(status){//状态//同时抛出infotab的action(状态状态更新提交)
    return {
        type:'CHANGE_MYTAB_STATUS',//改变mytab的状态
        payload:status
    }
}


export {cart};//购物车所有的action(状态状态更新提交)都存在了cart里
