import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !password) {
            setErrorMessage("Por favor, preencha todos os campos.");
            return;
        }

        if (username === "admin" && password === "1234") {
            alert("Login bem-sucedido!");
            navigate("/dashboard");
        } else {
            setErrorMessage("Credenciais inválidas!");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <input
                    ref={usernameRef}
                    type="text"
                    placeholder="Usuário"
                    className="input-field"
                />
                <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Senha"
                    className="input-field"
                />
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button onClick={handleLogin} className="login-btn">Entrar</button>
            </div>
        </div>
    );
}

export default Login;
