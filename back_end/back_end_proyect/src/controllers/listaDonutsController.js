import { anadirDonuts, getAllDonuts,eliminarDonut } from "../services/listaDonuts.js";



export async function getAllDonutsController(req, res) {

    const resUserInfo = await getAllDonuts()

    res.status(200).send({donuts: resUserInfo})

}
export function crearDonutsController(req, res) {
    try {
        console.log("Datos recibidos en el backend:", req.body); // Para depuración
        const { nombre, sabor, precio } = req.body;

        if (!nombre || !sabor || !precio) {
            return res.status(400).json({ error: "Faltan datos" });
        }

        const nuevoDonut = anadirDonuts({ nombre, sabor, precio }); 
        console.log("Nuevo donut creado:", nuevoDonut); 
        res.status(201).json({ mensaje: "Donut creado", donut: nuevoDonut });
    } catch (error) {
        console.error("Error al crear el donut:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}
export function deleteDonutController(req, res) {
    try {
        console.log("ID recibido para eliminar:", req.params.id);

        const donutId = parseInt(req.params.id);
        if (isNaN(donutId)) {
            return res.status(400).json({ error: "El ID proporcionado no es válido" });
        }

        const resDonutInfo = eliminarDonut(donutId);

        if (!resDonutInfo || resDonutInfo.mensaje === 'No existe donut') {
            return res.status(404).json({ mensaje: 'Donut no encontrado' });
        }

        res.status(200).json({ mensaje: 'Donut eliminado', donut: resDonutInfo });
    } catch (error) {
        console.error("Error al eliminar el donut:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}
