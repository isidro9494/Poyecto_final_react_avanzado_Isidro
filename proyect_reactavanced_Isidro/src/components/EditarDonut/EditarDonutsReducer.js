
import { UPDATE_DONUT } from "./EditarDonutsActions"

const initialState ={
    donuts:[],
 
}
const editarDonutsReducer=(state = initialState, action)=>{
 if (action.type === UPDATE_DONUT){
    return{
        ...state,
        donuts: state.donuts.map((donut) =>
            donut.id === action.payload.id ? action.payload : donut
        ),
        selectedDonut: action.payload
    }
    }else{
        return state
 }
}
export default editarDonutsReducer ;
