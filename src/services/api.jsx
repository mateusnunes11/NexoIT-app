import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // URL base da API
});

export const getTasks = () => api.get('/tasks');
export const addTask = (task) => api.post('/tasks', task);
export const updateTask = (id, task) => api.put(`/tasks/${id}`, task);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);

export const getProjects = () => api.get('/projects');
export const addProject = (project) => api.post('/projects', project);
export const updateProject = (id, project) => api.put(`/projects/${id}`, project);
export const deleteProject = (id) => api.delete(`/projects/${id}`);

export const getLogs = () => api.get('/logs');
export const addLog = (log) => api.post('/logs', log);
