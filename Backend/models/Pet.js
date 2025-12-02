const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Pet = db.define("Pet", {
  name: DataTypes.STRING,
  type: DataTypes.STRING,
  age: DataTypes.INTEGER
});

module.exports = Pet;
