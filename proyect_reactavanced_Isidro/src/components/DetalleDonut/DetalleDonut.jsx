import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteDonut } from './DetalleDonutsActions';
import { eliminarDonut } from '../../core/services/listDonutFetch'; 


const DetalleDonut = ({ donut = null, onBack = () => {}, onEdit = () => {} }) => {
    

    const dispatch = useDispatch();

    const handleDelete = async() => {
        await eliminarDonut(donut.id)
        dispatch(deleteDonut(donut.id)); 
        onBack();
    };

    if (!donut || !donut.id || !donut.nombre) {
        return (
            <div>
                <p>No hay un Donut seleccionado.</p>
                <button onClick={onBack}>Volver al listado</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Detalles del Donut</h1>
            <p>ID: {donut.id}</p>
            <p>Nombre: {donut.nombre}</p>
            <button onClick={onEdit}>Editar</button>
            <button onClick={handleDelete}>Eliminar</button>
            <button onClick={onBack}>Volver</button>
        </div>
    );
};
export default DetalleDonut;