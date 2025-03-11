import { ADD_DONUT } from "./CrearDonutsAction";


const initialState ={
    donuts:undefined
}

const CrearDonutsReducer = (state = initialState,action)=>{
    if(action.type === ADD_DONUT){
        return{
            ...state,
            donuts:action.payload
        }
    }else{
        return state
    }
}
export default CrearDonutsReducer ;