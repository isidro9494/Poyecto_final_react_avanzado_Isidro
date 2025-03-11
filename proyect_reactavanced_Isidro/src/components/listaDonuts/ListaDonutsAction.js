
export const LOAD_DONUTS = "LOAD_DONUTS";

export const loadDonuts= (donuts)=>{
    return {
        type:LOAD_DONUTS,
        payload:donuts
    }
}