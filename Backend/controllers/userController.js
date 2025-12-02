const User = require("../models/User");
const pagination = require("../services/paginationService");

module.exports = {
  async list(req, res) {
    res.json(await pagination(User, req));
  }
};
