const User = require("../models/User");
const pagination = require("../services/paginationService");

module.exports = {
  
  // Listar todos os usuários
  async listUsers(req, res) {
    try {
      const result = await pagination(User, req);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: "Erro ao listar usuários." });
    }
  },

  // Retornar o perfil do usuário logado
  async getProfile(req, res) {
    try {
      const user = await User.findByPk(req.user.id);

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      res.json(user);

    } catch (err) {
      res.status(500).json({ error: "Erro ao buscar o perfil." });
    }
  }
};
