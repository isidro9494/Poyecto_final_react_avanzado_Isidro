import { CHANGE_MENU_OPTIONS } from "./MenuActions"



const initialState ={
    menuOptions:0
}

const menuReducer = (state = initialState,action)=>{
    if(action.type === CHANGE_MENU_OPTIONS){
        return{
            ...state,
            menuOptions:action.payload.menuOptions
        
        }
    }else{
        return state
    }
}
export default menuReducer