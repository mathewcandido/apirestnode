const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { findAll, create, deleteitem, update, findById } = require('./controllers/RoutersController')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const gate = 8000;



const allowedOrigins = ['http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));


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
