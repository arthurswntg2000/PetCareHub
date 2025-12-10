const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Appointment = db.define("Appointment", {
  date: DataTypes.STRING,
  description: DataTypes.STRING,
  PetId: DataTypes.INTEGER,  
  UserId: DataTypes.INTEGER
});

module.exports = Appointment;
