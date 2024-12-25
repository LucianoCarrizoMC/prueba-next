import Link from 'next/link';
import React from 'react';

export const Menu = () => {
  return (
    <>
      <nav className="menu">
        <ul>
          <li><Link href="/Formulario">Formulario</Link></li>
          <li><Link href="/Tabla">Tabla</Link></li>
          <li><Link href="/RegistroUsuarios">Registrar un nuevo usuario</Link></li>
          <li><Link href="/Login">Salir</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
