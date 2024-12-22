import { GLOBALTYPES } from "../actions/globalTypes";



const notifyReducer = (state = false, action) => {
    switch(action.type){
        case GLOBALTYPES.NOTIFY:
            return action.payload;
        default:
            return state
    }
}

export default notifyReducer;