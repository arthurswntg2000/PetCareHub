const Appointment = require("../models/Appointment");
const pagination = require("../services/paginationService");

module.exports = {
  async create(req, res) {
    const appointment = await Appointment.create({
      ...req.body,
      UserId: req.userId
    });

    res.json(appointment);
  },

  async list(req, res) {
    const data = await pagination(Appointment, req);
    res.json(data);
  }
};
