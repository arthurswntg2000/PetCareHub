const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { validateLogin, validateRegister } = require("../utils/validators");

// Registro de usuário
router.post("/register", validateRegister, authController.register);

// Login de usuário
router.post("/login", validateLogin, authController.login);

module.exports = router;
