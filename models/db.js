const Sequelize = require("sequelize");
const sequelize = new Sequelize("item", "root", "", {
  host: "localhost",
  dialect: "mysql",
});


module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};


//Arquivo para chamar o sequelize chamar o mysql
