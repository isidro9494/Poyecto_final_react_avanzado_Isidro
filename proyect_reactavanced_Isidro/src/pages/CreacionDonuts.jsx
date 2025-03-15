import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { anadirDonut,loadDonuts } from '../components/crearDonuts/CrearDonutsAction'
import { getDonut } from '../core/services/listDonutFetch'


const CreacionDonuts = () => {
  
    const [donuts,setDonuts] = useState([])
    const [datos ,setDatos] = useState({
      nombre:"",
      sabor:"",
      precio:""
    })
    
    const dispatch =useDispatch();
    const inputHandler = (name, value) => {
      setDatos({
          ...datos,
          [name]: value
      });
  };
  const handlerSubmit = async () => {
    try {
        const nuevosDatos = await anadirDonut(datos); // Espera la respuesta del backend
        console.log("Donut añadido al backend:", nuevosDatos);

        // Actualiza el estado del frontend local
        setDonuts(prevState => [...prevState, nuevosDatos]);

        // Actualiza el estado en Redux
        dispatch(anadirDonut(nuevosDatos));

        // Limpia los datos del formulario
        setDatos({ nombre: "", sabor: "", precio: "" });
    } catch (error) {
        console.error("Error al añadir el donut:", error);
    }
};

   const loadDonutsList = async () => {
          const donutsList = await getDonut()
          dispatch(
              loadDonuts(donutsList)
          )
      }
useEffect(() => {
    const loadDonutsList = async () => {
        const donutsList = await getDonut();
        dispatch(loadDonuts(donutsList));
    };
    loadDonutsList();
}, []);



  return (
    <div>
      <h1>Creacion de donuts</h1>
      <div>
                <span>Nombre</span>
                <input type="text" value={datos.nombre} name='nombre' onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
            </div>
            <div>
                <span>Sabor </span>
                <input type="text" value={datos.sabor} name='sabor' onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
            </div>
            <div>
                <span>Precio</span>
                <input type="text" value={datos.precio} name='precio' onChange={(e) => {inputHandler(e.target.name, e.target.value)}}/>
            </div>
            <button onClick={handlerSubmit}>Crear donut</button>
    </div>
  )
}

export default CreacionDonuts