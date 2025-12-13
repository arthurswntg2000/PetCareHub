import { apiGet } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(location.search);
  const petId = params.get("id");
  if (!petId) return;

  const pet = await apiGet(`/pets/${petId}`);
  document.getElementById("petName").innerText = pet.name;

  // mostrar agendamentos desse pet
  const appts = await apiGet("/appointments");
  const list = document.querySelector(".appointments");
  list.innerHTML = "";

  appts
    .filter(a => a.petId === parseInt(petId))
    .forEach(a => {
      const li = document.createElement("li");
      li.textContent = `${a.date} – ${a.description}`;
      list.appendChild(li);
    });
});
