let tasks = [
    { id: 1, title: "Finalizar relatório", description: "Finalizar o relatório de vendas", status: "Em progresso" },
    { id: 2, title: "Reunião de equipe", description: "Alinhamento com a equipe", status: "Pendente" },
    { id: 3, title: "Revisar código", description: "Revisar o código do projeto", status: "Concluído" },
];

exports.getAllTasks = (req, res) => {
    res.json(tasks);
};

exports.addTask = (req, res) => {
    const { title, description, status } = req.body;
    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        status,
    };
    tasks.push(newTask);
    res.json(newTask);
};

exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    tasks[taskIndex] = { id: parseInt(id), title, description, status };
    res.json(tasks[taskIndex]);
};

exports.deleteTask = (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    res.json({ message: 'Task deleted' });
};
