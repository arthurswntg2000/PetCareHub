const User = require("../models/User");
const bcrypt = require("bcryptjs");
const tokenService = require("../services/tokenService");

module.exports = {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      const hash = await bcrypt.hash(password, 10);

      const user = await User.create({
        name,
        email,
        password: hash
      });

      res.json(user);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Senha incorreta" });

    const token = tokenService.generateToken(user.id);

    res.json({ user, token });
  }
};
