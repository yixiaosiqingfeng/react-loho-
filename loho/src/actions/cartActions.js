export function add(goods){//传进一个商品
    return {
        type:'ADD_TO_CART',//类型，添加商品
        payload:goods//用于更新状态的数据
    }
}

export function remove(proId){//删除时传个id就行
    return {
        type:'REMOVE_FROM_CART',
        payload:proId
    }
}

export function change(proId,qty){//id,和数量
    return {
        type:'CHANGE_GOODS_QTY',//改变数量
        payload:{proId,qty}
    }
}