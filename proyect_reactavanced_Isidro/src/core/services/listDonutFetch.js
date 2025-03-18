export const getDonut = async () => {
    const res = await fetch('http://localhost:3000/lista')
    const result = await res.json()

    return result.donuts
}

export const anadirDonut = async (nuevoDonut) => {
    try {
        console.log("Datos enviados al backend:", nuevoDonut); // LOG aquí
        const res = await fetch('http://localhost:3000/lista', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoDonut),
        });

        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        const result = await res.json();
        console.log("Respuesta del backend:", result); // LOG aquí
        return result.donut; 
    } catch (error) {
        console.error("Error al añadir un donut en fetch:", error); // LOG aquí
        throw error;
    }
};


export const eliminarDonut = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/lista/${id}`, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        console.log('Se ha elimiado correctamente');
        return await res.json();
        
    } catch (error) {
        console.error('Fallo al eliminar el donut', error);
    }
};
export const editarDonut = async (donut) => {
    try {
        const response = await fetch(`http://localhost:3000/lista/${donut.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(donut),
        });

        if (!response.ok) {
            throw new Error('Error al actualizar el donut en el backend');
        }

        return await response.json(); 
    } catch (error) {
        console.error(error);
        throw error;
    }
};
