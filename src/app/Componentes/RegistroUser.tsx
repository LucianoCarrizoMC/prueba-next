'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser, registerUser } from "../Firebase/Promesas";

const RegistroUSer = () => {
    const router = useRouter();
    const [usuario, setUsuario] = useState("");
    const [contra, setContra] = useState("");

  
    const handleRegister = async () => {
      try {
        const usuarios = await loginUser();
        const usuarioExistente = usuarios.find((user) => user.user === usuario);
  
        if (usuarioExistente) {
          alert("El usuario ya está registrado. Por favor, inicie sesión.");
          return;
        }
  
        const nuevoUsuario = { user: usuario, contra: contra };
        await registerUser(nuevoUsuario);
  
        alert("Usuario registrado exitosamente.");
        router.push("/Login"); 
      } catch (e) {
        console.log("Error durante el registro:", e);
        alert("Hubo un problema al registrar el usuario.");
      }
    };
  
    return (
      <div>
        <h1>Registro de Usuario</h1>
        <div>
          <label>Correo:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={contra}
            onChange={(e) => setContra(e.target.value)}
          />
        </div>
        <button onClick={handleRegister}>Registrar</button>
      </div>
    );
  };
  
  export default RegistroUSer;