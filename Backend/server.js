const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/auth", require("./routes/authRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/pets", require("./routes/petRoutes"));
app.use("/appointments", require("./routes/appointmentRoutes"));

// Middleware global de erros
app.use(errorHandler);

db.sync({ alter: true })
  .then(() => {
    console.log("Banco sincronizado.");
    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
  })
  .catch(err => console.error(err));
