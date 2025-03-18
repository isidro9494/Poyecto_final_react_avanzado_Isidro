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
    if (!datos.nombre || !datos.sabor || !datos.precio) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    try {
        const nuevosDatos = await anadirDonut(datos);
        console.log("Donut añadido al backend:", nuevosDatos);

        dispatch(anadirDonut(nuevosDatos)); // Añade el donut a Redux
        setDatos({ nombre: "", sabor: "", precio: "" }); // Limpia el formulario
        await loadDonutsList(); // Actualiza la lista desde el backend
    } catch (error) {
        console.error("Error al añadir el donut:", error);
        alert("Hubo un problema al añadir el donut. Intenta de nuevo.");
    }
};

const loadDonutsList = async () => {
    try {
        const donutsList = await getDonut();
        dispatch(loadDonuts(donutsList)); // Actualiza Redux
    } catch (error) {
        console.error("Error al cargar la lista de donuts:", error);
    }
};

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