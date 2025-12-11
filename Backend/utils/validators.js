module.exports = {
  validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  },

  // ---------------------------
  // VALIDAR REGISTRO DE USUÁRIO
  // ---------------------------
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

  // ----------------------
  // VALIDAR LOGIN
  // ----------------------
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

  // ----------------------
  // VALIDAR PET (ATUALIZADO)
  // ----------------------
  validatePet(req, res, next) {
    const { name, species, breed, age } = req.body;

    if (!name || name.length < 2) {
      return res.status(400).json({ error: "Nome do pet deve ter pelo menos 2 caracteres." });
    }

    if (!species) {
      return res.status(400).json({ error: "Espécie do pet é obrigatória." });
    }

    if (!breed) {
      return res.status(400).json({ error: "Raça do pet é obrigatória." });
    }

    if (age !== undefined && age < 0) {
      return res.status(400).json({ error: "Idade do pet inválida." });
    }

    next();
  },

  // ----------------------
  // VALIDAR AGENDAMENTO
  // ----------------------
  validateAppointment(req, res, next) {
    const { date, description, PetId } = req.body;

    if (!date) {
      return res.status(400).json({ error: "Data é obrigatória." });
    }

    if (!description || description.length < 3) {
      return res.status(400).json({ error: "Descrição muito curta." });
    }

    if (!PetId) {
      return res.status(400).json({ error: "É necessário informar o ID do pet." });
    }

    next();
  }
};
