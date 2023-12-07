const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Post = require('./models/Post');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para obter todas as postagens
app.get("/api/posts", function (req, res) {
    Post.findAll({ order: [["id", "DESC"]] })
        .then(function (posts) {
            res.json(posts);
        })
        .catch(function (erro) {
            res.status(500).json({ error: "Erro ao recuperar as postagens" });
        });
});

// Rota para adicionar uma postagem
app.post("/api/posts", function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
        .then(function (post) {
            res.json(post);
        })
        .catch(function (erro) {
            res.status(500).json({ error: "Erro ao inserir a postagem" });
        });
});

// Rota para excluir uma postagem
app.delete("/api/posts/:id", function (req, res) {
    Post.destroy({ where: { id: req.params.id } })
        .then(function () {
            res.json({ message: "Postagem excluída com sucesso" });
        })
        .catch(function (erro) {
            res.status(500).json({ error: "Erro ao excluir a postagem" });
        });
});

// Rota para obter detalhes de uma postagem para edição
app.get("/api/posts/:id", function (req, res) {
    Post.findByPk(req.params.id)
        .then((post) => {
            if (post) {
                res.json(post);
            } else {
                res.status(404).json({ error: "Postagem não encontrada" });
            }
        })
        .catch((erro) => {
            res.status(500).json({ error: "Erro ao localizar a postagem" });
        });
});

// Rota para editar uma postagem
app.put("/api/posts/:id", function (req, res) {
    Post.update({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    },
        {
            where: { id: req.params.id },
        }
    )
        .then(function () {
            res.json({ message: "Postagem atualizada com sucesso" });
        })
        .catch(function (erro) {
            res.status(500).json({ error: "Erro ao atualizar a postagem" });
        });
});

app.listen(8000, function () {
    console.log("Servidor está executando na porta 8000!");
});
