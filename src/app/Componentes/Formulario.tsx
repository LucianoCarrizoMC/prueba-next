'use client'
import React, { useState } from 'react'
import { ISBoxeador } from '../inicialState/ISBoxeador'
import { registrarBoxeador } from '../Firebase/Promesas'
import Menu from './Menu'

export const Formulario=() => {
    const[boxeador,setBoxeador] = useState(ISBoxeador)
    const handleBoxeador = (estado:string,valor:string)=>{
        if(estado=="nombre" || estado=="apellido" || estado=="edad" || estado=="genero" ||
           estado=="victorias"|| estado=="descripcion"|| estado=="derrotas"  || estado=="categoria"){
        setBoxeador({...boxeador,[estado]:valor})
        }
    }
    const handleRegistrar = ()=>{
      console.log("le diste al boton")
      alert("Vas a registrar")
      console.log(boxeador)
      registrarBoxeador(boxeador).then(()=>{
        alert("se registro")
      }).catch((e)=>{
        alert("xoko too mira "+e)
      })
    
    }
  return (
    <>
      <h1>Formulario Final</h1>
      <Menu/>

      <label>Nombre</label><br />
      <input type="text" placeholder='Ingrese su nombre'
        name='nombre'
        onChange={(e)=>{handleBoxeador(e.currentTarget.name,e.currentTarget.value)}}/><br />

      <label>Apellido</label><br />
      <input type="text" placeholder='Ingrese su Apellido'
        name='apellido'
        onChange={(e)=>{handleBoxeador(e.currentTarget.name,e.currentTarget.value)}}/><br />

      <label>Edad</label><br />
      <input type="number" placeholder='Ingrese su Edad'
        name='edad'
        onChange={(e)=>{handleBoxeador(e.currentTarget.name,e.currentTarget.value)}}/><br />




      <label>Género</label><br />
      <input
        type="radio"
        name="genero"
        value="Masculino"
        onChange={(e) => handleBoxeador(e.currentTarget.name, e.currentTarget.value)}
      />
      Masculino <br />
      <input
        type="radio"
        name="genero"
        value="Femenino"
        onChange={(e) => handleBoxeador(e.currentTarget.name, e.currentTarget.value)}
      />
      Femenino <br />

      <label>Categoría</label><br />
      <select
        name="categoria"
        onChange={(e) => handleBoxeador(e.currentTarget.name, e.currentTarget.value)}
      >
        <option value="">Selecciona una categoría</option>
        <option value="Peso Pesado">Peso Pesado</option>
        <option value="Peso Ligero">Peso Ligero</option>
        <option value="Peso Medio">Peso Medio</option>
      </select><br />






      <label>Victorias</label><br/>
      <input type="number" name='victorias'
        onChange={(e)=>{handleBoxeador(e.currentTarget.name,e.currentTarget.value)}}/><br/>

      <label>Derrotas</label><br/>
      <input type="number" name='derrotas'
        onChange={(e)=>{handleBoxeador(e.currentTarget.name,e.currentTarget.value)}}/><br/>

      <label>Descripcion</label><br/>
      <textarea name="descripcion"
        onChange={(e)=>{handleBoxeador(e.currentTarget.name,e.currentTarget.value)}}></textarea><br/>



      <button type='button'
         onClick={handleRegistrar}>Registrar</button>


    </>
    )
}
export default Formulario



