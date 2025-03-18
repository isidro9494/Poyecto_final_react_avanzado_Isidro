
export const LOAD_DONUTS = "LOAD_DONUTS";
export const SET_SELECTION = "SET_SELECTION"

export const loadDonuts= (donuts)=>{
    return {
        type:LOAD_DONUTS,
        payload:donuts
    }
}

export const seleccionarDonut = (donut)=>{
    return{
        type:SET_SELECTION,
        payload:donut
    }
}