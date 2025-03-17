import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { actualizarDonut } from '../EditarDonut/EditarDonutsActions';
import {  editarDonut } from '../../core/services/listDonutFetch';

const EditarDonut = ({ donut, onCancel }) => {
    const [formData, setFormData] = useState({ ...donut });
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const actualizaDonut = await editarDonut(formData);
        dispatch(actualizarDonut(actualizaDonut)); 
        onCancel(); 
    };

    return (
       <div>
            <h1>Editar Donut</h1>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange}/>
            </div>
            <div>
                <label>sabor:</label>
                <input type="text" name="sabor" value={formData.sabor} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Precio:</label>
                <input type="text" name="precio" value={formData.precio} onChange={handleInputChange}/>
            </div>
            <button type="submit" onClick={handleSubmit}>Guardar</button>
            <button type="button" onClick={onCancel}> Cancelar</button>
            </div>
    );
};

export default EditarDonut;