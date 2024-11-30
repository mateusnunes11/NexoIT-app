let projects = [
    { id: 1, nome: "Projeto 1", descricao: "Descrição do Projeto 1" },
    { id: 2, nome: "Projeto 2", descricao: "Descrição do Projeto 2" },
    { id: 3, nome: "Projeto 3", descricao: "Descrição do Projeto 3" },
];

exports.getAllProjects = (req, res) => {
    res.json(projects);
};

exports.addProject = (req, res) => {
    const { nome, descricao } = req.body;
    const newProject = {
        id: projects.length + 1,
        nome,
        descricao,
    };
    projects.push(newProject);
    res.json(newProject);
};

exports.updateProject = (req, res) => {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    const projectIndex = projects.findIndex((project) => project.id === parseInt(id));
    if (projectIndex === -1) {
        return res.status(404).json({ message: 'Project not found' });
    }

    projects[projectIndex] = { id: parseInt(id), nome, descricao };
    res.json(projects[projectIndex]);
};

exports.deleteProject = (req, res) => {
    const { id } = req.params;
    projects = projects.filter((project) => project.id !== parseInt(id));
    res.json({ message: 'Project deleted' });
};
