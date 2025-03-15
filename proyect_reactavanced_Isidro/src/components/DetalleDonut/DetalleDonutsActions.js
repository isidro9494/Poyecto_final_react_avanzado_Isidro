export const SET_SELECTED_DONUT = "SET_SELECTED_DONUT";
export const DELETE_DONUT = "DELETE_DONUT";


export const setSelectedDonut = (donut) => ({
    type: SET_SELECTED_DONUT,
    payload: donut
});

export const deleteDonut = (id) => ({
    type: DELETE_DONUT,
    payload: id
});