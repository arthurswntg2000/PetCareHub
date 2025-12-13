import { apiGet, apiPost } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  loadAppointments();

  document.getElementById("newApptBtn").addEventListener("click", async () => {
    const date = prompt("Data (AAAA-MM-DD):");
    const desc = prompt("Descrição:");
    const petId = prompt("ID do Pet:");

    if (!date || !desc || !petId) {
      alert("Preencha todos os campos!");
      return;
    }

    const res = await apiPost("/appointments", {
      petId: parseInt(petId),
      date,
      description: desc
    });

    if (res.error) alert(res.error);
    else loadAppointments();
  });
});

async function loadAppointments() {
  const tbody = document.querySelector("#appointmentsTable tbody");
  tbody.innerHTML = "";

  const appts = await apiGet("/appointments");
  if (appts.error) {
    tbody.innerHTML = `<tr><td colspan="4">${appts.error}</td></tr>`;
    return;
  }

  appts.forEach(a => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${a.date}</td>
      <td>${a.PetId || "-"}</td>
      <td>${a.description}</td>
      <td>
        <button class="btn secondary" onclick="deleteAppointment(${a.id})">Excluir</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

window.deleteAppointment = async function(id) {
  if (!confirm("Deletar agendamento?")) return;
  const res = await apiDelete(`/appointments/${id}`);
  if (res.error) alert(res.error);
  else loadAppointments();
};
