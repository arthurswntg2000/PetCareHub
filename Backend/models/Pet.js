const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Pet = db.define("Pet", {
  name: DataTypes.STRING,
  species: DataTypes.STRING, 
  breed: DataTypes.STRING,    
  age: DataTypes.INTEGER
});

module.exports = Pet;
