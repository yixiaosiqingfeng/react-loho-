import { combineReducers } from "redux";

import cartReducer from './cartReducer';
import commonReducer from './commonReducer';
import infotabReducer from './infotabReducer';
import mytabReducer from './mytabReducer';


let rootReducer = combineReducers({
    cartReducer,
    commonReducer,
    infotabReducer,
    mytabReducer
});

export default rootReducer;