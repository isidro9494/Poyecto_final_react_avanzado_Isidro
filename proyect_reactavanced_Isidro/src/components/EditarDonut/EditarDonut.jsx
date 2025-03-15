import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateDonutOnServer } from '../core/services/listDonutFetch';
import { actualizarDonut } from '../EditarDonut/EditarDonutsActions';

const EditarDonut = ({ donut, onCancel }) => {
    const [formData, setFormData] = useState({ ...donut });
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedDonut = await updateDonutOnServer(formData); // Actualiza en el backend
        dispatch(actualizarDonut(updatedDonut)); // Actualiza en Redux
        onCancel(); // Regresa al detalle
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Editar Donut</h1>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange}/>
            </div>
            <button type="submit">Guardar</button>
            <button type="button" onClick={onCancel}> Cancelar</button>
        </form>
    );
};

export default EditarDonut;