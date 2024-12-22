import { GLOBALTYPES } from "../actions/globalTypes";


const initialState = false

const walletReducer = (state = initialState, action) => {
    switch(action.type){
        case GLOBALTYPES.WALLET:
            return action.payload;
        default:
            return state;
    }
}

export default walletReducer;