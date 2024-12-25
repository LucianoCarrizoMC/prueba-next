'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "../Firebase/Promesas";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contra1, setContra1] = useState("");
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Necesario para evitar la recarga de la página

    try {
      const usuarios = await loginUser();
      const usuarioEncontrado = usuarios.find(
        (user) => user.user === usuario && user.contra === contra1
      );

      if (usuarioEncontrado) {
        alert("Inicio de sesión exitoso");
        router.push("/Formulario");
      } else {
        alert("Credenciales incorrectas. Intente nuevamente.");
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      alert("Hubo un problema al verificar las credenciales.");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>usuario:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
        <br />
        <label>Contraseña:</label>
        <input
          type="password"
          value={contra1}
          onChange={(e) => setContra1(e.target.value)}
          required
        />
        <br />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </>
  );
};

export default Login;
