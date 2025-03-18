# Poyecto_final_react_avanzado_Isidro
## Descripción
Este proyecto consiste en una aplicación con un backend desarrollado en *Node.js* y un frontend en *React con Redux. La aplicación permite la gestión de elementos a través de un CRUD (Creación, Listado, Modificación y Borrado) con una interfaz compuesta por tres páginas principales: **Inicio, **Creación/Edición, y **Lista de elementos. Además, incluye una sección de **Contacto*.

## Tecnologías Utilizadas
### Backend:
- *Node.js*
- *Express.js*
- *MongoDB* como base de datos (sin autenticación ni JWT)

### Frontend:
- *React.js*
- *Redux* para el manejo de estado (usando Reducers y Actions)
- *React Router* para navegación entre páginas
- *CSS Framework*: [Tailwind, Bootstrap, Material UI, etc.]
- [Otras herramientas necesarias]

## Instalación
### Requisitos previos
- Tener instalado *Node.js* y *npm/yarn*
- Tener *MongoDB* en ejecución localmente o en un servicio en la nube (ejemplo: MongoDB Atlas)

### Instrucciones
#### Backend:
sh
cd backend
npm install  # Instalar dependencias
node index.js  # Iniciar el servidor en http://localhost:3000


#### Frontend:
sh
cd frontend
npm install  # Instalar dependencias
npm run dev  # Iniciar la aplicación


## Uso
1. Asegurarse de que *MongoDB* está corriendo.
2. Ejecutar el backend con node index.js.
3. Abrir el navegador y acceder a http://localhost:3000 para verificar que el backend está corriendo correctamente.
4. Ejecutar el frontend con npm run dev.
5. Acceder a la aplicación en http://localhost:[puerto del frontend].

## Estructura de Páginas en el Frontend
### *Inicio* (/)
- Página principal con información general sobre la aplicación.

### *Lista de elementos* (/listas)
- Muestra todos los elementos registrados en la base de datos.
- Permite seleccionar elementos para su edición o eliminación.

### *Creación/Edición* (/crear o /editar/:id)
- Formulario para agregar nuevos elementos o modificar existentes.

### *Contacto* (/contacto)
- Página con información de contacto.

## Redux - Estado Global
Se usa Redux para manejar el estado de la aplicación con las siguientes acciones y reducers:

### *Acciones (Actions)*
- ADD_ITEM: Agregar un nuevo elemento.
- UPDATE_ITEM: Actualizar un elemento existente.
- DELETE_ITEM: Eliminar un elemento.
- SET_ITEMS: Cargar la lista de elementos desde la API.
- SET_OPTION: Manejar opciones globales de la aplicación.

### *Reducer*
Ejemplo de reducer para los elementos:
js
const initialState = {
  items: [],
  options: {}
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...state, items: action.payload };
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload.id ? action.payload : item)
      };
    case 'DELETE_ITEM':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case 'SET_OPTION':
      return { ...state, options: { ...state.options, ...action.payload } };
    default:
      return state;
  }
};


## Endpoints API
### GET /listas
- *Descripción:* Obtiene la lista de elementos almacenados en MongoDB.
- *Prueba con cURL:*
sh
curl -X GET http://localhost:3000/listas


### GET /listas/:id
- *Descripción:* Obtiene un elemento específico por ID desde MongoDB.
- *Prueba con cURL:*
sh
curl -X GET http://localhost:3000/listas/1


### POST /listas
- *Descripción:* Crea un nuevo elemento en la base de datos.
- *Prueba con cURL:*
sh
curl -X POST http://localhost:3000/listas -H "Content-Type: application/json" -d '{"nombre": "Nuevo elemento"}'


### PUT /listas/:id
- *Descripción:* Actualiza un elemento en MongoDB por su ID.
- *Prueba con cURL:*
```sh
curl -X PUT http: