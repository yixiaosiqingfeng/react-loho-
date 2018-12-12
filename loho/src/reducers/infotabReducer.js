let initState = {//初始化
    // 是否显示底部tab菜单
    infotabStatus:0//一开始默认为下标0
}
let infotabReducer = (state=initState,action)=>{//state和action是内部调用时传过来的
    switch(action.type){
        case 'CHANGE_INFOTAB_STATUS'://change_infotabr_status,修改infotab状态
            return {
                ...state,//不管原来是什么，先拓展原本的数据
                infotabStatus:action.payload//传什么过来就改成什么
            }

        default:
            return state;//如果没有做任何操作，就走这一步，原始值
    }
}

export default infotabReducer;