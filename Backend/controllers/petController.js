const Pet = require("../models/Pet");
const pagination = require("../services/paginationService");

module.exports = {
  async create(req, res) {
    const pet = await Pet.create({
      ...req.body,
      UserId: req.userId
    });
    res.json(pet);
  },

  async list(req, res) {
    const pets = await pagination(Pet, req);
    res.json(pets);
  }
};
