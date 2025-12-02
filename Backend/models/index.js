const User = require("./User");
const Pet = require("./Pet");
const Appointment = require("./Appointment");

// Relacionamentos
User.hasMany(Pet);
Pet.belongsTo(User);

User.hasMany(Appointment);
Appointment.belongsTo(User);

Pet.hasMany(Appointment);
Appointment.belongsTo(Pet);

module.exports = { User, Pet, Appointment };
