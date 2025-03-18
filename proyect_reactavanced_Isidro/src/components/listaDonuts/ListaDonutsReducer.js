import { LOAD_DONUTS, SET_SELECTION } from "../listaDonuts/ListaDonutsAction";



const initialState ={
    donuts:[],
    selectDon:null

}

const listaDonutsReducer = (state = initialState,action)=>{
    if(action.type === LOAD_DONUTS){
        return{
            ...state,
            donuts:action.payload
        }
    
    }    if(action.type === SET_SELECTION){
        return{
            ...state,
            selectDon:action.payload
        }
    }else{
        return state
    }
}
export default listaDonutsReducer;