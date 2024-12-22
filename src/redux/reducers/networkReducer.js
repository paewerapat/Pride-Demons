import { GLOBALTYPES } from "../actions/globalTypes";



const networkReducer = (initialState = false, action) => {
    switch(action.type){
        case GLOBALTYPES.NETWORK:
            return action.payload
        default:
            return initialState;
    }
}

export default networkReducer;