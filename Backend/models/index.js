const User = require("./User");
const Pet = require("./Pet");
const Appointment = require("./Appointment");

// User → Pets
User.hasMany(Pet);
Pet.belongsTo(User);

// User → Appointments
User.hasMany(Appointment);
Appointment.belongsTo(User);

// Pet → Appointments
Pet.hasMany(Appointment);
Appointment.belongsTo(Pet);

module.exports = { User, Pet, Appointment };
