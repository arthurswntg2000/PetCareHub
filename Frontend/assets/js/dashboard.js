import { apiGet } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    /* ======================
       BUSCAR PETS
    ====================== */
    const pets = await apiGet("/pets");
    const totalPets = Array.isArray(pets) ? pets.length : 0;
    document.getElementById("totalPets").textContent = totalPets;

    /* ======================
       BUSCAR AGENDAMENTOS
    ====================== */
    const appts = await apiGet("/appointments");
    const agendamentos = Array.isArray(appts) ? appts : [];

    document.getElementById("totalAgendamentos").textContent =
      agendamentos.length;

    /* ======================
       PRÓXIMOS AGENDAMENTOS
    ====================== */
    const hoje = new Date();
    const proximos = agendamentos.filter(a => {
      const data = new Date(a.date);
      return !isNaN(data) && data >= hoje;
    });

    document.getElementById("proximosAgendamentos").textContent =
      proximos.length;

    /* ======================
       LISTAGEM
    ====================== */
    const list = document.getElementById("appointmentList");
    list.innerHTML = "";

    if (proximos.length === 0) {
      list.innerHTML = "<li>Nenhum agendamento próximo</li>";
      return;
    }

    proximos.slice(0, 6).forEach(a => {
      const li = document.createElement("li");

      const dataFormatada = new Date(a.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });

      li.textContent = `${dataFormatada} — ${a.description || "Sem descrição"}`;
      list.appendChild(li);
    });

  } catch (err) {
    console.error("Erro ao carregar dashboard:", err);D
    alert("Erro ao carregar dados do painel. Tente novamente.");
  }
});
