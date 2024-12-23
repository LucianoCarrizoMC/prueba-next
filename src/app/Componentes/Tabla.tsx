'use client'
import React, { useEffect, useState } from 'react'
import { IBoxeador } from '../Interfaces/IBoxeador'
import { obtenerBoxeador } from '../Firebase/Promesas'
import Menu from './Menu'

export const Tabla = () => {
  const [TBoxeador, setBoxeador] = useState<IBoxeador[]>([])


const handleObtenerTodo = () =>{
    obtenerBoxeador().then( //si funciona then si no funciona se va a catch
        (boxeador)=>{
            console.log(boxeador)
            setBoxeador(boxeador)
        }).catch(
            (e)=>{
                console.log("error")
            })
    }
    useEffect(()=>{
        handleObtenerTodo();
    },[])
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


            </tr>
        </thead>
        <tbody>
          {
            TBoxeador.map((boxeador)=>{return(
            <tr key={boxeador.nombre+boxeador.apellido}>
                <td>{boxeador.nombre}</td>
                <td>{boxeador.apellido}</td>
                <td>{boxeador.edad}</td>
                <td>{boxeador.genero}</td>
                <td>{boxeador.categoria}</td>

                <td>{boxeador.victorias}</td>
                <td>{boxeador.derrotas}</td>
                <td>{boxeador.descripcion}</td>
                <td>
                    <button>Actualizar</button>
                    <button>Eliminar</button>
                </td>
            </tr>
                    )})
                }
        </tbody>
    </table>
    </>
  )
}
export default Tabla