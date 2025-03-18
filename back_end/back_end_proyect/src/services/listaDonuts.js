 export const listaDonuts = [
    { "id": 1, "nombre": "Donut de Chocolate", "sabor": "Relleno", "precio": 1.5 },
    { "id": 2, "nombre": "Donut Glaseado", "sabor": "Clásico", "precio": 1.2 },
    { "id": 3, "nombre": "Donut de Fresa", "sabor": "Relleno", "precio": 1.8 },
    { "id": 4, "nombre": "Donut de Vainilla", "sabor": "Clásico", "precio": 1.3 },
    { "id": 5, "nombre": "Donut con Chispas", "sabor": "Clásico", "precio": 1.4 },
    { "id": 6, "nombre": "Donut Maple", "sabor": "Cubierto", "precio": 1.6 },
    { "id": 7, "nombre": "Donut Matcha", "sabor": "Cubierto", "precio": 1.9 },
    { "id": 8, "nombre": "Donut de Caramelo", "sabor": "Relleno", "precio": 2.0 },
    { "id": 9, "nombre": "Donut de Café", "sabor": "Cubierto", "precio": 1.5 },
    { "id": 10, "nombre": "Donut de Coco", "sabor": "Clásico", "precio": 1.7 },
    { "id": 11, "nombre": "Donut de Almendra", "sabor": "Cubierto", "precio": 1.8 },
    { "id": 12, "nombre": "Donut Red Velvet", "sabor": "Relleno", "precio": 2.2 },
    { "id": 13, "nombre": "Donut de Limón", "sabor": "Clásico", "precio": 1.4 },
    { "id": 14, "nombre": "Donut de Calabaza", "sabor": "Relleno", "precio": 1.9 },
    { "id": 15, "nombre": "Donut Espolvoreado", "sabor": "Clásico", "precio": 1.3 },
    { "id": 16, "nombre": "Donut de Avellana", "sabor": "Relleno", "precio": 2.1 },
    { "id": 17, "nombre": "Donut de Arándanos", "sabor": "Relleno", "precio": 2.0 },
    { "id": 18, "nombre": "Donut de Manzana", "sabor": "Cubierto", "precio": 1.6 },
    { "id": 19, "nombre": "Donut de Nuez", "sabor": "Clásico", "precio": 1.7 },
    { "id": 20, "nombre": "Donut de Piña", "sabor": "Relleno", "precio": 1.8 }
  ]
  
  
  export const getAllDonuts = async () => {
  
      return listaDonuts
  }
  export const anadirDonuts = async (donut)=>{
    const nuevaId = listaDonuts.length + 1
    const nuevoDonut = {id: nuevaId, ...donut}
    listaDonuts.push(nuevoDonut)

    return nuevoDonut;
  }

export const eliminarDonut = (donutId) => {
  console.log("Intentando eliminar el donut con ID:", donutId);

  const donutAux = listaDonuts.find(donut => donut.id === donutId);
  if (!donutAux) {
      console.log("No se encontró el donut con ID:", donutId);
      return { mensaje: 'No existe donut' };
  }


  const index = listaDonuts.indexOf(donutAux);
  if (index !== -1) {
      listaDonuts.splice(index, 1);
  }

  console.log("Donut eliminado correctamente:", donutAux);
  return donutAux;
};
export const modifyDonut = (donutId, donutModified) => {
  const donutIndex = listaDonuts.findIndex((u) => u.id === parseInt(donutId));
  if (donutIndex === -1) {
      return null; 
  }
  listaDonuts[donutIndex] = { id: parseInt(donutId), ...donutModified };
  return listaDonuts[donutIndex]; 
};
export const getDonutsById = async(id)=>{
  return listaDonuts.find((donut)=>donut.id === parseInt(id))
}