import { SET_SELECTED_DONUT, DELETE_DONUT} from "../DetalleDonut/DetalleDonutsActions";

const initialState ={
    donuts:[],
    selectedDonut: null
}
const detalleDonutsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_DONUT:
            return { 
                ...state, 
                selectedDonut: action.payload 
            };
        case DELETE_DONUT:
            return {
                ...state,
                donuts: state.donuts.filter((donut) => donut.id !== action.payload),
                selectedDonut: null 
            };
        default:
            return state;
    }
};
export default detalleDonutsReducer;