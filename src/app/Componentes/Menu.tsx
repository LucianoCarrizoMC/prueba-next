import Link from 'next/link'
import React from 'react'

export const Menu = () => {
  return (
    <>
    <nav >
        <Link href="/Formulario">
            Formulario  
        </Link>
        <br />
        <Link href="/Tabla">
            Tabla  
        </Link>
        <br />
        <Link href="/RegistroUSer">
            registrar un nuevo usuario  
        </Link>
        <br />
        <Link href="/Login">
            Salir   
        </Link>
    </nav>
    </>

  )
}
export default Menu
