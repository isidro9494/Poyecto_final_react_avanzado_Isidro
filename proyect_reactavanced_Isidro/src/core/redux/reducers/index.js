import { combineReducers } from "redux";
import menuReducer from "../../../components/menu/MenuReducer";
import listaDonutsReducer from "../../../components/listaDonuts/ListaDonutsReducer";
import CrearDonutsReducer from "../../../components/crearDonuts/CrearDonutsReducer";




const reducers = combineReducers({
   menuReducer,
    listaDonutsReducer,
    CrearDonutsReducer
})

export default reducers