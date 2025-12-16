const express = require("express");
const cors = require("cors");
const path = require("path");
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

/* ======================
     Servir Frontend
   ====================== */

// Diretório onde está o frontend (HTML, CSS, JS)
// Ajuste o caminho se a pasta estiver em outro lugar
const frontendPath = path.join(__dirname, "frontend");

app.use(express.static(frontendPath));

// Cadê o SPA? Quando a rota não bater com API, serve o index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

/* ======================
       Rotas da API
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
   Banco + Inicialização
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
