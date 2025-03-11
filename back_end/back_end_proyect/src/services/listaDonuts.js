const listaDonuts = [
    { "id": 1, "nombre": "Donut de Chocolate", "tipo": "Relleno", "precio": 1.5 },
    { "id": 2, "nombre": "Donut Glaseado", "tipo": "Clásico", "precio": 1.2 },
    { "id": 3, "nombre": "Donut de Fresa", "tipo": "Relleno", "precio": 1.8 },
    { "id": 4, "nombre": "Donut de Vainilla", "tipo": "Clásico", "precio": 1.3 },
    { "id": 5, "nombre": "Donut con Chispas", "tipo": "Clásico", "precio": 1.4 },
    { "id": 6, "nombre": "Donut Maple", "tipo": "Cubierto", "precio": 1.6 },
    { "id": 7, "nombre": "Donut Matcha", "tipo": "Cubierto", "precio": 1.9 },
    { "id": 8, "nombre": "Donut de Caramelo", "tipo": "Relleno", "precio": 2.0 },
    { "id": 9, "nombre": "Donut de Café", "tipo": "Cubierto", "precio": 1.5 },
    { "id": 10, "nombre": "Donut de Coco", "tipo": "Clásico", "precio": 1.7 },
    { "id": 11, "nombre": "Donut de Almendra", "tipo": "Cubierto", "precio": 1.8 },
    { "id": 12, "nombre": "Donut Red Velvet", "tipo": "Relleno", "precio": 2.2 },
    { "id": 13, "nombre": "Donut de Limón", "tipo": "Clásico", "precio": 1.4 },
    { "id": 14, "nombre": "Donut de Calabaza", "tipo": "Relleno", "precio": 1.9 },
    { "id": 15, "nombre": "Donut Espolvoreado", "tipo": "Clásico", "precio": 1.3 },
    { "id": 16, "nombre": "Donut de Avellana", "tipo": "Relleno", "precio": 2.1 },
    { "id": 17, "nombre": "Donut de Arándanos", "tipo": "Relleno", "precio": 2.0 },
    { "id": 18, "nombre": "Donut de Manzana", "tipo": "Cubierto", "precio": 1.6 },
    { "id": 19, "nombre": "Donut de Nuez", "tipo": "Clásico", "precio": 1.7 },
    { "id": 20, "nombre": "Donut de Piña", "tipo": "Relleno", "precio": 1.8 }
  ]
  
  
  exports.getAllDonuts = async () => {
  
      return listaDonuts
  }