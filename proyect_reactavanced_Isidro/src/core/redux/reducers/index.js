import { combineReducers } from "redux";
import menuReducer from "../../../components/menu/MenuReducer";
import listaDonutsReducer from "../../../components/listaDonuts/ListaDonutsReducer";
import CrearDonutsReducer from "../../../components/crearDonuts/CrearDonutsReducer";
import detalleDonutsReducer from "../../../components/DetalleDonut/DetalleDonutsReducer";




const reducers = combineReducers({
   menuReducer,
   detalleDonutsReducer,
    listaDonutsReducer,
   CrearDonutsReducer,
   
})

export default reducers