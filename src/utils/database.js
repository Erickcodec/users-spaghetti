const { Sequelize } = require("sequelize");

const { DB_USERNAME, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASS, {
  dialect: "postgres",
  host: DB_HOST,
  port: DB_PORT,
});

module.exports = {
  sequelize,
};
