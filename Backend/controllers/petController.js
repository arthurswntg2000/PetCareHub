const Pet = require("../models/Pet");
const pagination = require("../services/paginationService");

module.exports = {
  // Criar pet
  async createPet(req, res) {
    try {
      const pet = await Pet.create({
        ...req.body,
        UserId: req.userId
      });

      res.json(pet);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Listar pets do usuário
  async listPets(req, res) {
    const pets = await pagination(Pet, req);
    res.json(pets);
  },

  // Buscar pet por ID
  async getPetById(req, res) {
    const pet = await Pet.findByPk(req.params.id);
    if (!pet) return res.status(404).json({ error: "Pet não encontrado" });
    res.json(pet);
  },

  // Atualizar pet
  async updatePet(req, res) {
    const pet = await Pet.findByPk(req.params.id);
    if (!pet) return res.status(404).json({ error: "Pet não encontrado" });

    await pet.update(req.body);
    res.json(pet);
  },

  // Deletar pet
  async deletePet(req, res) {
    const pet = await Pet.findByPk(req.params.id);
    if (!pet) return res.status(404).json({ error: "Pet não encontrado" });

    await pet.destroy();
    res.json({ message: "Pet removido com sucesso" });
  }
};
