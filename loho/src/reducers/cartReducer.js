let initState = {//初始化
    // 购物车商品别表
    goodslist:[]
}
let commonReducer = (state=initState,action)=>{
    switch(action.type){
        //添加商品
        case 'ADD_TO_CART':
            return {
                ...state,//不管有多少，先拓展
                goodslist:[...state.goodslist,action.payload]//payload就是一个商品
            }
        //删除商品
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                goodslist:state.goodslist.filter(goods=>goods.proId!==action.payload)
                //过滤掉id不一样的，删除掉一样的id,不一样的id留下（箭头函数）
            }
        //修改商品数量
        case 'CHANGE_GOODS_QTY':
            return {
                ...state,
                goodslist:state.goodslist.filter(goods=>{
                    if(goods.proId === action.payload.proId){
                    //先找到那个商品，如果两个id相同
                        goods.qty = action.payload.qty
                        //不管加还是减，反正我传过来
                    }

                    return true;//filter是过滤，加了true之后，代表不过滤，改完之后，我依然传回去这么多商品给你
                })
            }

        default:
            return state;//抛出数据
    }
}

export default commonReducer;