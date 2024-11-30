const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes.js');
const projectRoutes = require('./routes/projectRoutes');
const logRoutes = require('./routes/logRoutes');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Definir as rotas
app.use('/api/tasks', taskRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/logs', logRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
