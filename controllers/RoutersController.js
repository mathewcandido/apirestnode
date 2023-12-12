const Item = require("../models/Item");

const findAll = (req, res) => {
    Item.findAll({ order: [["id", "DESC"]] })
        .then(function (posts) {
            res.json(posts);
        })
        .catch(function (erro) {
            res.status(500).json({ error: "Erro ao recuperar as postagens" });
        });
}

const create = (req, res) => {
    Item.create({
        title: req.body.title,
        content: req.body.content,
        value:req.body.value

    })
        .then(function (post) {
            res.json(post);
        })
        .catch(function (error) {
            res.status(500).json({ error: "Erro ao inserir a postagem" });
        });
}
const deleteitem = (req, res) => {
    Item.destroy({ where: { id: req.params.id } })
        .then(function () {
            res.json({ message: "Postagem excluída com sucesso" });
        })
        .catch(function (erro) {
            res.status(500).json({ error: "Erro ao excluir a postagem" });
        });
}
const findById = (req, res) => {
    Item.findByPk(req.params.id)
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
}

const update = (req, res) => {
    Item.update({
        title: req.body.title,
        content: req.body.content,
        value:req.body.value
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
}


module.exports = { findAll, create, deleteitem, findById, update };
