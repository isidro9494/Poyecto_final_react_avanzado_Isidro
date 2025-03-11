import React from 'react'

const ListaDonutsComponent = () => {
  const {
    donuts
} = useSelector(state => state.listaDonutsReducer)
  return (
    <div>listaDonutsComponent</div>
  )
}

export default ListaDonutsComponent