const Pet = require("../models/Pet");
const pagination = require("../services/paginationService");

module.exports = {
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

  async listPets(req, res) {
    const pets = await Pet.findAll({ where: { UserId: req.userId } });
    res.json(pets);
  },

  async getPetById(req, res) {
    const pet = await Pet.findOne({
      where: { id: req.params.id, UserId: req.userId }
    });

    if (!pet) return res.status(404).json({ error: "Pet não encontrado" });

    res.json(pet);
  },

  async updatePet(req, res) {
    const pet = await Pet.findOne({
      where: { id: req.params.id, UserId: req.userId }
    });

    if (!pet) return res.status(404).json({ error: "Pet não encontrado" });

    await pet.update(req.body);
    res.json(pet);
  },

  async deletePet(req, res) {
    const pet = await Pet.findOne({
      where: { id: req.params.id, UserId: req.userId }
    });

    if (!pet) return res.status(404).json({ error: "Pet não encontrado" });

    await pet.destroy();
    res.json({ message: "Pet removido com sucesso" });
  }
};
