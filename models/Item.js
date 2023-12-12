const db = require('./db');

const Item = db.sequelize.define("item", {
    title: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    content: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    value:{
        type: db.Sequelize.FLOAT,
        allowNull: false
    }
})

module.exports = Item;

//Atualizar a estrutura da tabela
// Post.sync({ alter: true });

//Recriar toda a estrutura da tabela (excluir e criar a tabela)
// Item.sync({ force: true});

// Somente cria a estrutura da tabela, caso a tabela não exista
Item.sync();