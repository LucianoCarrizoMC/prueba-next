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
    </nav>
    </>

  )
}
export default Menu
