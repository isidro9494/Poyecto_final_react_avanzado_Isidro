import { ADD_DONUT, LOAD_DONUTS } from "./CrearDonutsAction";


const initialState ={
    donuts:[]
}

const CrearDonutsReducer = (state = initialState,action)=>{
    if(action.type === ADD_DONUT){
        return{
            ...state,
            donuts: [...state.donuts, action.payload]
        }
    }else if(action.type === LOAD_DONUTS){
        return {
            ...state,
            donuts:action.payload,
        }
    }else{
        return state
    }
}
export default CrearDonutsReducer ;