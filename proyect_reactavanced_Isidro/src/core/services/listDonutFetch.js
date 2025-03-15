export const getDonut = async () => {
    const res = await fetch('http://localhost:3000/lista')
    const result = await res.json()

    return result.donuts
}

export const anadirDonut = async (nuevoDonut) => {
    try {
        const res = await fetch('http://localhost:3000/lista', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoDonut)
        });

        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        const result = await res.json();
        console.log("Respuesta del backend:", result);
        return result.donut; // Asegúrate de que el backend devuelve un objeto 'donut'
    } catch (error) {
        console.error("Error al añadir un donut en fetch:", error);
        throw error; // Lanza el error para que pueda ser manejado en handlerSubmit
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
