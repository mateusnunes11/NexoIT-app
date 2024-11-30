import React, { useState } from "react";
import "../styles/logs.css";

const Logs = () => {
    const [logs, setLogs] = useState([
        { id: 1, acao: "Login realizado", data: "2024-11-29 08:00" },
        { id: 2, acao: "Tarefa 1 concluída", data: "2024-11-29 09:00" },
        { id: 3, acao: "Projeto 2 iniciado", data: "2024-11-29 10:00" },
        { id: 4, acao: "Reunião de equipe realizada", data: "2024-11-29 11:00" },
        { id: 5, acao: "Relatório mensal enviado", data: "2024-11-29 12:00" },
        { id: 6, acao: "Bug corrigido no sistema", data: "2024-11-29 14:00" },
    ]);

    const [newLog, setNewLog] = useState({ acao: "", data: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewLog({ ...newLog, [name]: value });
    };

    const handleAddLog = () => {
        if (newLog.acao && newLog.data) {
            const newLogItem = {
                id: logs.length + 1,
                acao: newLog.acao,
                data: newLog.data,
            };
            setLogs([...logs, newLogItem]); // Adiciona o novo log à lista
            setNewLog({ acao: "", data: "" }); // Limpa os campos
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    };

    return (
        <div className="logs">
            <h4>Logs Recentes</h4>
            <ul>
                {logs.map((log) => (
                    <li key={log.id}>
                        <p>{log.acao} - {log.data}</p>
                    </li>
                ))}
            </ul>

            <div className="log-form">
                <input
                    type="text"
                    name="acao"
                    placeholder="Ação"
                    value={newLog.acao}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="data"
                    placeholder="Data (ex: 2024-11-29 15:00)"
                    value={newLog.data}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddLog}>Registrar Log</button>
            </div>
        </div>
    );
};

export default Logs;
