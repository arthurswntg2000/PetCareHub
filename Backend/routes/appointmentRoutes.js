const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");
const authMiddleware = require("../middleware/authMiddleware");
const { validateAppointment } = require("../utils/validators");

// Criar agendamento
router.post("/", authMiddleware, validateAppointment, appointmentController.createAppointment);

// Listar agendamentos do usuário
router.get("/", authMiddleware, appointmentController.listAppointments);

// Buscar agendamento específico
router.get("/:id", authMiddleware, appointmentController.getAppointmentById);

// Atualizar agendamento
router.put("/:id", authMiddleware, validateAppointment, appointmentController.updateAppointment);

// Deletar agendamento
router.delete("/:id", authMiddleware, appointmentController.deleteAppointment);

module.exports = router;
