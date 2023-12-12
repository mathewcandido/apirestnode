const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { findAll, create, deleteitem, update, findById } = require('./controllers/RoutersController')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const gate = 8000;

// Rota para obter todas as postagens
app.get("/api/posts", findAll);

// Rota para adicionar uma postagem
app.post("/api/posts", create);

// Rota para excluir uma postagem
app.delete("/api/posts/:id", deleteitem);

// Rota para obter detalhes de uma postagem para edição
app.get("/api/posts/:id", findById);

// Rota para editar uma postagem
app.put("/api/posts/:id", update);

app.listen(gate, () => {
    console.log(`Servidor está executando na porta ${gate}!`);
});
