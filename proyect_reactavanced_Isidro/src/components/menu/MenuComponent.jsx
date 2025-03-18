import React from 'react'
import { useDispatch } from 'react-redux'
import { changeMenuOptions } from './MenuActions'

const MenuComponent = () => {
    const dispatch = useDispatch()
    const handlerMenuOption = (option)=>{
        dispatch(changeMenuOptions({
            menuOptions: option
        }))
    }
  return (
    <div>
       <div>
            <button onClick={() => handlerMenuOption(0)}>Creacion Donuts</button>
        </div>
        <div>
            <button onClick={() => handlerMenuOption(1)}>Listado Donuts</button>
        </div>
        <div>
            <button onClick={() => handlerMenuOption(2)}>Contacto</button>
        </div>
    </div>
  )
}

export default MenuComponent