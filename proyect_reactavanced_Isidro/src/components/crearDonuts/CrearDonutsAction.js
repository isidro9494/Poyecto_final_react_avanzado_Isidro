
export const ADD_DONUT ="ADD_DONUT"
export const LOAD_DONUTS = "LOAD_DONUTS";

export const anadirDonut = (donut)=>{
    return{
        type:ADD_DONUT,
        payload:donut
    }
}
export const loadDonuts = (donuts) => {
    return {
      type: LOAD_DONUTS,
      payload: donuts,
    };
  };