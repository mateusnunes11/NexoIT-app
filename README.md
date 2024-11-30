# NexoIT - Projeto Integrador IV - B

Este projeto tem como objetivo o desenvolvimento de uma plataforma para gerenciamento de **projetos** e **tarefas**, utilizando React para o front-end e integrando funcionalidades como adição, exclusão e acompanhamento de status.

## Descrição

A aplicação possui duas principais funcionalidades:

1. **Gerenciamento de Projetos**:
   - Visualização de projetos com detalhes como nome, descrição e status.
   - Possibilidade de adicionar novos projetos e excluir os existentes.
   - Status do projeto (Em andamento, Concluído, Pendente) com diferentes cores de destaque.

2. **Gerenciamento de Tarefas**:
   - Exibição de uma lista de tarefas com título, descrição e status.
   - Funcionalidade de adicionar novas tarefas e excluí-las.
   - Status da tarefa com diferentes cores (Em progresso, Pendente, Concluído).

## Como Rodar o Projeto

### Pré-requisitos

- **Node.js** (recomendado a versão 16 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

### Passos

1. **Clonar o repositório**:

   Primeiro, clone o repositório em sua máquina:

   ```bash
   git clone https://github.com/mateusnunes11/NexoIT.git
   cd NexoIT

 Instalar dependências:

Em seguida, instale as dependências do projeto com o comando npm:

npm install

Após a instalação, inicie o servidor de desenvolvimento:

npm start

Estrutura do Projeto:

src/components/Projects.js: Componente para gerenciamento de projetos.
src/components/Task.js: Componente para gerenciamento de tarefas.
src/styles/projects.css: Estilos para o gerenciamento de projetos.
src/styles/task.css: Estilos para o gerenciamento de tarefas.

Funcionalidades:

1. Gerenciamento de Projetos:
Adicionar um novo projeto (nome, descrição, status).
Excluir projetos existentes.
Alteração de status do projeto (Em andamento, Concluído, Pendente) com diferentes cores.
2. Gerenciamento de Tarefas:
Adicionar uma nova tarefa (título, descrição, status).
Excluir tarefas existentes.
Alteração de status da tarefa (Em progresso, Concluído, Pendente) com cores específicas.

Como Testar:

Adicionar um Projeto:
Clique no botão "Adicionar Projeto" para abrir o formulário.
Preencha o nome, descrição e selecione o status.
Clique em "Adicionar" para adicionar o projeto à lista.
Excluir um Projeto:

Clique no botão "Excluir" ao lado de qualquer projeto para removê-lo da lista.
Adicionar uma Tarefa:

Adicione tarefas com título, descrição e status similar ao processo de adicionar um projeto.

Excluir uma Tarefa:

Exclua tarefas clicando no botão "Excluir" próximo à tarefa desejada.

Tecnologias Utilizadas:

React: Para o desenvolvimento da interface de usuário.
CSS: Para estilização da interface.
Git: Para controle de versão e gerenciamento do código.
