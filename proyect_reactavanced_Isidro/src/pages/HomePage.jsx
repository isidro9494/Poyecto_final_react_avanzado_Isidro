import React from 'react'
import { useSelector } from 'react-redux'

import MenuComponent from '../components/menu/MenuComponent'
import Contacto from './Contacto'
import ListadoDonuts from './ListadoDonuts'
import CreacionDonuts from './CreacionDonuts'


const HomePage = () => {
    const {
        menuOptions
    }= useSelector(state => state.menuReducer)
  return (
    <div>
        <div>
            <h1>DOnuts Isidro </h1>
            </div>
           <div>
            <MenuComponent/>
            {
        menuOptions === 0 
          ? (
            <CreacionDonuts/>
          ) : menuOptions === 1 ?(
            <ListadoDonuts/>
          ):(
            <Contacto/>
          )
      }
         
           </div>
    </div>
  )
}

export default HomePage