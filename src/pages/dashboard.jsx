import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Task from "../components/task";
import Projects from "../components/Projects";
import Logs from "../components/Logs";
import "../styles/dashboard.css";


const Dashboard = () => {
    const [activeSection, setActiveSection] = useState("");
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    const showSection = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>

            <div className="dashboard-buttons">
                <button onClick={() => showSection("tasks")}>Tarefas</button>
                <button onClick={() => showSection("projects")}>Projetos</button>
                <button onClick={() => showSection("logs")}>Logs Recentes</button>
            </div>

            <section>
                {activeSection === "tasks" && <Task />}
                {activeSection === "projects" && <Projects />}
                {activeSection === "logs" && <Logs />}
            </section>

            <button className="logout-button" onClick={handleLogout}>
                Sair
            </button>
        </div>
    );
};

export default Dashboard;
