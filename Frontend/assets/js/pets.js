import { apiGet } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  if (!localStorage.getItem("token")) {
    window.location = "login.html";
    return;
  }

  const pets = await apiGet("/pets");
  const list = document.getElementById("listaPets");
  list.innerHTML = "";

  pets.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="pet-card">
        <h3>${p.name}</h3>
        <p>Espécie: ${p.species}</p>
        <p>Raça: ${p.breed || "-"}</p>
        <a href="detalhes.html?id=${p.id}" class="btn secondary">Detalhes</a>
      </div>
    `;
    list.appendChild(li);
  });
});
