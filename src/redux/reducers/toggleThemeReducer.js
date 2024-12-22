import { GLOBALTYPES } from "../actions/globalTypes"


const toggleThemeReducer = (state = "default", action) => {
    switch(action.type){
        case GLOBALTYPES.THEME:
            return action.payload;
        default:
            return state;
    }
}


export default toggleThemeReducer;