import React, { useState } from "react";
import "../styles/task.css";

function Task() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Finalizar relatório",
            description: "Finalizar o relatório de vendas do mês de outubro.",
            status: "Em progresso",
        },
        {
            id: 2,
            title: "Reunião de equipe",
            description: "Realizar reunião de alinhamento com a equipe de desenvolvimento.",
            status: "Pendente",
        },
        {
            id: 3,
            title: "Revisar código",
            description: "Revisar o código do projeto X antes da entrega final.",
            status: "Concluído",
        },
    ]);

    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        status: "Em progresso", // Valor padrão para o status
    });
    const [isAdding, setIsAdding] = useState(false); // Estado para controlar a visibilidade do formulário

    // Função para adicionar nova tarefa
    const handleAddTask = () => {
        setTasks([
            ...tasks,
            { id: tasks.length + 1, ...newTask }, // Adiciona a nova tarefa
        ]);
        setIsAdding(false); // Fecha o formulário após adicionar
        setNewTask({ title: "", description: "", status: "Em progresso" }); // Reseta os campos
    };

    // Função para excluir tarefa
    const handleDeleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    // Função para lidar com mudanças nos campos do formulário
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask({
            ...newTask,
            [name]: value,
        });
    };

    // Função para obter a classe de status com base no valor
    const getStatusClass = (status) => {
        switch (status) {
            case "Concluído":
                return "concluido";
            case "Pendente":
                return "pendente";
            case "Em progresso":
                return "em-andamento";
            default:
                return "em-progresso"; // Caso "Em progresso" seja algum outro valor
        }
    };

    return (
        <div className="task-container">
            <h3>Lista de Tarefas</h3>

            {/* Botão para abrir o formulário */}
            <div className="tasks-buttons">
                <button onClick={() => setIsAdding(true)} className="add-task-btn">
                    Adicionar Tarefa
                </button>
            </div>

            {/* Formulário para adicionar tarefa */}
            {isAdding && (
                <div className="add-task-form">
                    <h5>Adicionar Nova Tarefa</h5>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label>
                            Título da Tarefa:
                            <input
                                type="text"
                                name="title"
                                value={newTask.title}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Descrição:
                            <textarea
                                name="description"
                                value={newTask.description}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Status:
                            <select
                                name="status"
                                value={newTask.status}
                                onChange={handleInputChange}
                            >
                                <option value="Em progresso">Em progresso</option>
                                <option value="Concluído">Concluído</option>
                                <option value="Pendente">Pendente</option>
                            </select>
                        </label>
                        <button
                            type="button"
                            onClick={handleAddTask}
                            className="submit-task-btn"
                        >
                            Adicionar
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsAdding(false)}
                            className="cancel-task-btn"
                        >
                            Cancelar
                        </button>
                    </form>
                </div>
            )}

            {/* Lista de tarefas */}
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className="task-item">
                        <h4>{task.title}</h4>
                        <p>{task.description}</p>
                        <span className={`status ${getStatusClass(task.status)}`}>
                            {task.status}
                        </span>
                        <button
                            onClick={() => handleDeleteTask(task.id)}
                            className="delete-task-btn"
                        >
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Task;
