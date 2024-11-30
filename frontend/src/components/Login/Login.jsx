import { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://c22-26-ft-webapp.onrender.com/auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: username, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("authToken", data.token);
        onLogin();
      } else {
        setErrorMessage("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      setErrorMessage("Error al conectar con el servidor");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="logo-container">
          <img
            src="src/assets/TimePlanify_Logo.png"
            alt="TimePlanify Logo"
            className="login-logo"
          />
        </div>
        <h2>Inicia Sesión</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div>
          <label htmlFor="username">Correo Electrónico:</label>
          <input
            type="email"
            id="username"
            placeholder="Ingresa tu correo"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
