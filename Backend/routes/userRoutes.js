const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// Listar todos os usuários (apenas autenticado)
router.get("/", authMiddleware, userController.listUsers);

// Retornar dados do próprio usuário
router.get("/me", authMiddleware, userController.getProfile);

module.exports = router;
