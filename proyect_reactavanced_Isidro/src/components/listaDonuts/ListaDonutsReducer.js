import { LOAD_DONUTS } from "../listaDonuts/ListaDonutsAction";



const initialState ={
    donuts:undefined
}

const listaDonutsReducer = (state = initialState,action)=>{
    if(action.type === LOAD_DONUTS){
        return{
            ...state,
            donuts:action.payload
        }
    }else{
        return state
    }
}
export default listaDonutsReducer;