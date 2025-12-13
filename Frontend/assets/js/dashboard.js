import { apiGet } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  if (!localStorage.getItem("token")) {
    window.location = "login.html";
    return;
  }

  const pets = await apiGet("/pets");
  document.getElementById("totalPets").innerText = pets.length || 0;

  const appts = await apiGet("/appointments");
  document.getElementById("totalAgendamentos").innerText = appts.length || 0;

  const hoje = new Date();
  const proximos = appts.filter(a => new Date(a.date) >= hoje);
  document.getElementById("proximosAgendamentos").innerText = proximos.length || 0;

  const list = document.getElementById("appointmentList");
  list.innerHTML = "";
  proximos.slice(0, 6).forEach(a => {
    const li = document.createElement("li");
    li.textContent = `${a.date} – ${a.description}`;
    list.appendChild(li);
  });
});
