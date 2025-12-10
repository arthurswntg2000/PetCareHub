const Appointment = require("../models/Appointment");
const pagination = require("../services/paginationService");

module.exports = {
  async createAppointment(req, res) {
    try {
      const appointment = await Appointment.create({
        ...req.body,
        UserId: req.userId
      });

      res.json(appointment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async listAppointments(req, res) {
    const appointments = await Appointment.findAll({
      where: { UserId: req.userId }
    });

    res.json(appointments);
  },

  async getAppointmentById(req, res) {
    const appointment = await Appointment.findOne({
      where: { id: req.params.id, UserId: req.userId }
    });

    if (!appointment)
      return res.status(404).json({ error: "Agendamento não encontrado" });

    res.json(appointment);
  },

  async updateAppointment(req, res) {
    const appointment = await Appointment.findOne({
      where: { id: req.params.id, UserId: req.userId }
    });

    if (!appointment)
      return res.status(404).json({ error: "Agendamento não encontrado" });

    await appointment.update(req.body);
    res.json(appointment);
  },

  async deleteAppointment(req, res) {
    const appointment = await Appointment.findOne({
      where: { id: req.params.id, UserId: req.userId }
    });

    if (!appointment)
      return res.status(404).json({ error: "Agendamento não encontrado" });

    await appointment.destroy();
    res.json({ message: "Agendamento removido com sucesso" });
  }
};
