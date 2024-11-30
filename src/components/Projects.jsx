import React, { useState } from "react";
import "../styles/projects.css";

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            nome: "Desenvolvimento do Website",
            descricao: "Criação de um website responsivo para a empresa, com integração de funcionalidades e design moderno.",
            status: "Em andamento",
        },
        {
            id: 2,
            nome: "Sistema de Gestão de Inventário",
            descricao: "Desenvolvimento de um sistema de gestão para controle de estoque e monitoramento de produtos em tempo real.",
            status: "Concluído",
        },
        {
            id: 3,
            nome: "Aplicativo Móvel de Finanças",
            descricao: "Desenvolvimento de um aplicativo para controle financeiro pessoal, com funcionalidades de orçamento e gráficos de despesas.",
            status: "Pendente",
        },
    ]);

    const [newProject, setNewProject] = useState({
        nome: "",
        descricao: "",
        status: "Em andamento", // Valor padrão para o status
    });
    const [isAdding, setIsAdding] = useState(false); // Estado para controlar a visibilidade do formulário

    const handleAddProject = () => {
        setProjects([
            ...projects,
            { id: projects.length + 1, ...newProject }, // Adiciona o novo projeto
        ]);
        setIsAdding(false); // Fecha o formulário após adicionar
        setNewProject({ nome: "", descricao: "", status: "Em andamento" }); // Reseta os campos
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject({
            ...newProject,
            [name]: value,
        });
    };

    const handleDeleteProject = (id) => {
        const updatedProjects = projects.filter((project) => project.id !== id);
        setProjects(updatedProjects);
    };

    // Função para obter a classe de status com base no valor
    const getStatusClass = (status) => {
        switch (status) {
            case "Concluído":
                return "concluido";
            case "Pendente":
                return "pendente";
            case "Em andamento":
                return "em-andamento";
            default:
                return "em-progresso"; // Caso "Em progresso" seja algum outro valor
        }
    };

    return (
        <div className="projects">
            <h4>Lista de Projetos</h4>

            {/* Botão para abrir o formulário */}
            <div className="projects-buttons">
                <button onClick={() => setIsAdding(true)} className="add-project-btn">
                    Adicionar Projeto
                </button>
            </div>

            {/* Formulário para adicionar projeto */}
            {isAdding && (
                <div className="add-project-form">
                    <h5>Adicionar Novo Projeto</h5>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label>
                            Nome do Projeto:
                            <input
                                type="text"
                                name="nome"
                                value={newProject.nome}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Descrição:
                            <textarea
                                name="descricao"
                                value={newProject.descricao}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Status:
                            <select
                                name="status"
                                value={newProject.status}
                                onChange={handleInputChange}
                            >
                                <option value="Em andamento">Em andamento</option>
                                <option value="Concluído">Concluído</option>
                                <option value="Pendente">Pendente</option>
                            </select>
                        </label>
                        <button
                            type="button"
                            onClick={handleAddProject}
                            className="submit-project-btn"
                        >
                            Adicionar
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsAdding(false)}
                            className="cancel-project-btn"
                        >
                            Cancelar
                        </button>
                    </form>
                </div>
            )}

            {/* Lista de projetos */}
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h5>{project.nome}</h5>
                        <p>{project.descricao}</p>
                        <span className={`status ${getStatusClass(project.status)}`}>
                            {project.status}
                        </span>
                        <button
                            onClick={() => handleDeleteProject(project.id)}
                            className="delete-project-btn"
                        >
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
