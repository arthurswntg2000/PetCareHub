async function loadAppointments() {
    const list = document.getElementById("appointment-list");
    const items = await api("/appointments");

    list.innerHTML = items.map(a => `
        <div class="appointment-card">
            <h3>${a.date}</h3>
            <p>${a.description}</p>
        </div>
    `).join("");
}
