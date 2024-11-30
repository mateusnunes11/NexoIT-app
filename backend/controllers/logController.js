let logs = [
    { id: 1, acao: "Login realizado", data: "2024-11-29 08:00" },
    { id: 2, acao: "Tarefa 1 concluída", data: "2024-11-29 09:00" },
    { id: 3, acao: "Projeto 2 iniciado", data: "2024-11-29 10:00" },
];

exports.getAllLogs = (req, res) => {
    res.json(logs);
};

exports.addLog = (req, res) => {
    const { acao, data } = req.body;
    const newLog = {
        id: logs.length + 1,
        acao,
        data,
    };
    logs.push(newLog);
    res.json(newLog);
};
