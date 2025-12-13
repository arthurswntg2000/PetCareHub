const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");

const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

/* ======================
   Middlewares globais
====================== */
app.use(cors());
app.use(express.json());

/* Log simples e organizado */
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

/* ======================
   Rotas
====================== */
app.use("/auth", require("./routes/authRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/pets", require("./routes/petRoutes"));
app.use("/appointments", require("./routes/appointmentRoutes"));

/* ======================
   Middlewares finais
====================== */
app.use(notFound);       // 404
app.use(errorHandler);   // erros gerais

/* ======================
   Inicialização
====================== */
db.sync({ alter: true })
  .then(() => {
    console.log("Banco de dados sincronizado com sucesso.");
    app.listen(PORT, () =>
      console.log(`Servidor rodando em http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("Erro ao conectar com o banco:", err);
  });
