module.exports = {
  validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  },

  // Middleware para validar registro
  validateRegister(req, res, next) {
    const { name, email, password } = req.body;

    if (!name || name.length < 3) {
      return res.status(400).json({ error: "Nome deve ter pelo menos 3 caracteres." });
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ error: "E-mail inválido." });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({ error: "Senha deve ter pelo menos 6 caracteres." });
    }

    next();
  },

  // Middleware para validar login
  validateLogin(req, res, next) {
    const { email, password } = req.body;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ error: "E-mail inválido." });
    }

    if (!password) {
      return res.status(400).json({ error: "Senha é obrigatória." });
    }

    next();
  },
  
  // Middleware para validar PET
  validatePet(req, res, next) {
    const { name, type, age } = req.body;

    if (!name || name.length < 2) {
      return res.status(400).json({ error: "Nome do pet deve ter pelo menos 2 caracteres." });
    }

    if (!type) {
      return res.status(400).json({ error: "Tipo do pet é obrigatório." });
    }

    if (age !== undefined && age < 0) {
      return res.status(400).json({ error: "Idade do pet inválida." });
    }

    next();
  },

  validateAppointment(req, res, next) {
  const { date, description } = req.body;

  if (!date) {
    return res.status(400).json({ error: "Data é obrigatória." });
  }

  if (!description || description.length < 3) {
    return res.status(400).json({ error: "Descrição muito curta." });
  }

  next();
  }
};
