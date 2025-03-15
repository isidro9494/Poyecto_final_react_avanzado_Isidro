import React, { useEffect } from 'react'
import { loadDonuts ,seleccionarDonut} from '../listaDonuts/ListaDonutsAction'
import { getDonut } from '../../core/services/listDonutFetch'
import { useDispatch, useSelector } from 'react-redux'

const ListaDonutsComponent = ({ onDetail }) => {
  const {
    donuts
} = useSelector(state => state.listaDonutsReducer)
console.log("Estado de donuts:", donuts);
const dispatch = useDispatch()
const loadDonutsList = async () => {
    const donutsList = await getDonut()
    dispatch(
        loadDonuts(donutsList)
    )
}
const handleDetail = (donuts) => {
  dispatch(seleccionarDonut(donuts));
  onDetail(donuts); 
};
useEffect(() => {
  loadDonutsList();
}, []);
return (
<div>
    <h1>Listado de Donuts</h1>
    <div>

    {donuts && donuts.length > 0 ? (
      donuts.map((donut) => (
        <li key={donut.id}>
          ID: {donut.id}, Nombre: {donut.nombre}
          <button onClick={() => handleDetail(donut)}>Ver Detalles</button>
        </li>
      ))
    ) : (
      <span>... loading</span>
    )}
    </div>
</div>
)
}

export default ListaDonutsComponent