import React, { useState, useEffect } from 'react';

import { IBoxeador } from '../Interfaces/IBoxeador'; 
import { obtenerBoxeador, eliminarboxeador } from '../Firebase/Promesas';
import { useRouter } from 'next/navigation';
import Menu from './Menu';

export const Tabla = () => {
  const [TBoxeador, setBoxeador] = useState<IBoxeador[]>([]);
  const router = useRouter();  // Usamos el enrutador para redirigir

  const handleEliminar = async (boxeador: IBoxeador) => {
    try {
      await eliminarboxeador(boxeador);
      alert("Boxeador eliminado con éxito.");
      window.location.reload(); // Recarga la página después de eliminar
    } catch (error) {
      console.error("Error al eliminar el boxeador:", error);
      alert("Hubo un error al eliminar el boxeador.");
    }
  };

  const handleObtenerTodo = () => {
    obtenerBoxeador()
      .then((boxeador) => {
        setBoxeador(boxeador);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  useEffect(() => {
    handleObtenerTodo();
  }, []);

  const handleActualizar = (id: string) => {
    router.push(`/actualizar/${id}`);  // Redirige usando el ID del boxeador
  };

  return (
    <>
        <Menu/>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Genero</th>
            <th>Categoria</th>
            <th>Victorias</th>
            <th>Derrotas</th>
            <th>Descripcion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {TBoxeador.map((boxeador) => (
            <tr key={boxeador.id}>
              <td>{boxeador.nombre}</td>
              <td>{boxeador.apellido}</td>
              <td>{boxeador.edad}</td>
              <td>{boxeador.genero}</td>
              <td>{boxeador.categoria}</td>
              <td>{boxeador.victorias}</td>
              <td>{boxeador.derrotas}</td>
              <td>{boxeador.descripcion}</td>
              <td>
                <button onClick={() => handleActualizar(boxeador.id)}>Actualizar</button>
                <button onClick={() => handleEliminar(boxeador)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Tabla;
