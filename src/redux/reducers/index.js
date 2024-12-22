import { combineReducers } from "redux";
import wallet from './walletReducer';
import network from './networkReducer';
import notify from './notifyReducer';
import theme from './toggleThemeReducer'


export default combineReducers({
    wallet,
    network,
    notify,
    theme
})