const express = require("express");
const router = express.Router();
const petController = require("../controllers/petController");
const authMiddleware = require("../middleware/authMiddleware");
const { validatePet } = require("../utils/validators");

// Criar pet
router.post("/", authMiddleware, validatePet, petController.createPet);

// Listar pets do usuário
router.get("/", authMiddleware, petController.listPets);

// Buscar pet por ID
router.get("/:id", authMiddleware, petController.getPetById);

// Atualizar pet
router.put("/:id", authMiddleware, validatePet, petController.updatePet);

// Deletar pet
router.delete("/:id", authMiddleware, petController.deletePet);

module.exports = router;
