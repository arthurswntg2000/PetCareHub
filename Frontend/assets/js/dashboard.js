import { apiGet } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  document.getElementById("totalPets").innerText = "Carregando…";
  document.getElementById("totalAgendamentos").innerText = "Carregando…";
  document.getElementById("proximosAgendamentos").innerText = "Carregando…";

  // Pets
  const pets = await apiGet("/pets");
  document.getElementById("totalPets").innerText = pets.length || 0;

  // Agendamentos
  const appts = await apiGet("/appointments");
  document.getElementById("totalAgendamentos").innerText = appts.length || 0;

  // Próximos agendamentos = próximos 5 dias
  const hoje = new Date();
  const proximos = appts.filter(a => new Date(a.date) >= hoje);
  document.getElementById("proximosAgendamentos").innerText = proximos.length || 0;

  // Lista últimos 5
  const list = document.getElementById("appointmentList");
  list.innerHTML = "";
  proximos.slice(0, 6).forEach(a => {
    const li = document.createElement("li");
    li.textContent = `${a.date} – ${a.description}`;
    list.appendChild(li);
  });
});
